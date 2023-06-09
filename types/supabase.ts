export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      websites: {
        Row: {
          categories: string[] | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          pricing: string | null
          short_description: string | null
          title: string | null
          website_url: string | null
        }
        Insert: {
          categories?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          pricing?: string | null
          short_description?: string | null
          title?: string | null
          website_url?: string | null
        }
        Update: {
          categories?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          pricing?: string | null
          short_description?: string | null
          title?: string | null
          website_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
