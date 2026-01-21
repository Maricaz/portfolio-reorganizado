import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Loader2,
  QrCode,
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { SessionManager } from '@/components/admin/SessionManager'
import { logSecurityEvent, triggerSecurityAlert } from '@/services/security'

export const SecuritySettings = () => {
  const [factors, setFactors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [verifyCode, setVerifyCode] = useState('')
  const [factorId, setFactorId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchFactors()
  }, [])

  const fetchFactors = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.mfa.listFactors()
    if (error) {
      console.error('Error fetching factors', error)
    } else {
      setFactors(data.all || [])
    }
    setLoading(false)
  }

  const startEnrollment = async () => {
    setEnrolling(true)
    const { data, error } = await supabase.auth.mfa.enroll({
      factorType: 'totp',
    })
    if (error) {
      toast({
        title: 'Error enrolling',
        description: error.message,
        variant: 'destructive',
      })
      setEnrolling(false)
      return
    }

    setFactorId(data.id)
    setQrCode(data.totp.qr_code)
  }

  const verifyEnrollment = async () => {
    if (!factorId) return

    const { data: challengeData, error: challengeError } =
      await supabase.auth.mfa.challenge({ factorId })
    if (challengeError) {
      toast({
        title: 'Error challenging factor',
        description: challengeError.message,
        variant: 'destructive',
      })
      return
    }

    const { error: verifyError } = await supabase.auth.mfa.verify({
      factorId,
      challengeId: challengeData.id,
      code: verifyCode,
    })

    if (verifyError) {
      toast({
        title: 'Verification failed',
        description: 'The code provided was incorrect. Please try again.',
        variant: 'destructive',
      })
    } else {
      // Success Logic
      toast({
        title: 'Success!',
        description: 'Two-factor authentication has been enabled.',
      })
      setEnrolling(false)
      setQrCode(null)
      setVerifyCode('')
      fetchFactors()

      // Audit & Alert
      await logSecurityEvent('2FA_CHANGE', { type: 'enabled', factorId })
      await triggerSecurityAlert('2FA_CHANGE', {
        title: 'Security Alert: 2FA Enabled',
        message: 'Two-factor authentication was enabled for your account.',
      })
    }
  }

  const handleUnenroll = async (id: string) => {
    const { error } = await supabase.auth.mfa.unenroll({ factorId: id })
    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'MFA Disabled',
        description: 'Factor removed successfully.',
      })
      fetchFactors()

      // Audit & Alert
      await logSecurityEvent('2FA_CHANGE', { type: 'disabled', factorId: id })
      await triggerSecurityAlert('2FA_CHANGE', {
        title: 'Security Alert: 2FA Disabled',
        message: 'Two-factor authentication was disabled for your account.',
      })
    }
  }

  const hasVerifiedFactor = factors.some((f) => f.status === 'verified')

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Two-Factor Authentication (MFA)
              </CardTitle>
              <CardDescription>
                Secure your admin account with a second factor of
                authentication.
              </CardDescription>
            </div>
            {hasVerifiedFactor ? (
              <Badge className="bg-green-500 hover:bg-green-600">
                <ShieldCheck className="w-3 h-3 mr-1" /> Enabled
              </Badge>
            ) : (
              <Badge variant="secondary">Disabled</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {enrolling ? (
            <div className="space-y-6 border rounded-md p-6 bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Setup Authenticator App
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Scan the QR code below with Google Authenticator or Authy.
                  </p>
                </div>
              </div>

              {qrCode && (
                <div className="flex justify-center p-4 bg-white rounded-md w-fit mx-auto shadow-sm border">
                  <img src={qrCode} alt="QR Code" className="w-48 h-48" />
                </div>
              )}

              <div className="space-y-2 max-w-xs mx-auto text-center">
                <Label htmlFor="code">Enter 6-digit Code</Label>
                <Input
                  id="code"
                  placeholder="000000"
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                  maxLength={6}
                  className="text-center text-lg tracking-widest font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" onClick={() => setEnrolling(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={verifyEnrollment}
                  disabled={verifyCode.length !== 6}
                >
                  Verify & Enable
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {factors.length > 0 ? (
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Enrolled Factors</h4>
                  {factors.map((factor) => (
                    <div
                      key={factor.id}
                      className="flex items-center justify-between p-3 border rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted rounded-full">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {factor.factorType} ({factor.status})
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ID: {factor.id}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleUnenroll(factor.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground bg-muted/20 rounded-lg border-dashed border-2">
                  <AlertTriangle className="h-10 w-10 mb-2 opacity-50" />
                  <p>You have not enabled 2FA yet.</p>
                  <p className="text-sm">
                    We strongly recommend enabling it for all administrator
                    accounts.
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
        {!enrolling && (
          <CardFooter className="bg-muted/10 border-t px-6 py-4">
            <Button onClick={startEnrollment}>
              {factors.length > 0 ? 'Add Another Factor' : 'Enable 2FA'}
            </Button>
          </CardFooter>
        )}
      </Card>

      <SessionManager />
    </div>
  )
}
