import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Bell, BellOff, Loader2 } from 'lucide-react'
import {
  registerPush,
  unsubscribePush,
  checkSubscription,
} from '@/services/push'
import { useToast } from '@/hooks/use-toast'

export const PushSubscriptionManager = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    checkStatus()
  }, [])

  const checkStatus = async () => {
    try {
      const status = await checkSubscription()
      setIsSubscribed(status)
    } catch (error) {
      console.error('Failed to check push status', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubscribe = async () => {
    setLoading(true)
    try {
      await registerPush()
      setIsSubscribed(true)
      toast({
        title: 'Subscribed',
        description: 'You will now receive push notifications.',
      })
    } catch (error: any) {
      console.error(error)
      toast({
        title: 'Error',
        description: error.message || 'Failed to subscribe.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleUnsubscribe = async () => {
    setLoading(true)
    try {
      await unsubscribePush()
      setIsSubscribed(false)
      toast({
        title: 'Unsubscribed',
        description: 'You will no longer receive push notifications.',
      })
    } catch (error: any) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'Failed to unsubscribe.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6 flex justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isSubscribed ? (
            <Bell className="h-5 w-5 text-green-500" />
          ) : (
            <BellOff className="h-5 w-5 text-muted-foreground" />
          )}
          Push Notifications
        </CardTitle>
        <CardDescription>
          Receive real-time alerts for critical events even when the app is
          closed.
        </CardDescription>
      </CardHeader>
      <CardFooter className="bg-muted/10 border-t px-6 py-4">
        {isSubscribed ? (
          <Button variant="outline" onClick={handleUnsubscribe}>
            Disable Notifications
          </Button>
        ) : (
          <Button onClick={handleSubscribe}>Enable Notifications</Button>
        )}
      </CardFooter>
    </Card>
  )
}
