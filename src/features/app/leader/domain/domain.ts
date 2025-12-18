export interface Leader {
  id: string;
  slug: string;
  full_name: string;
  nickname?: string;
  phrase?: string;
  biography: string;

  avatar_url?: string;
  banner_url?: string;

  birth_date: string;
  nationality: string;
  gender: Gender;
  ideology?: string;

  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  website?: string | null;

  created_at: string;
}

export type Gender = "male" | "female" | "other";
