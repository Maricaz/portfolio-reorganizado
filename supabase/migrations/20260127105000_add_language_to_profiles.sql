-- Add language column to profiles table to support multilingual features
-- This migration ensures the column exists before the admin user creation script runs
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'pt';
