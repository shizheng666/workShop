import { z } from "zod";

// 这里集中定义前后端共用的报名字段约束，避免页面校验与 API 校验不一致。
export const registrationSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  email: z.string().trim().email("Please enter a valid email address."),
  affiliation: z.string().trim().min(1, "Affiliation is required."),
  countryOrRegion: z.string().trim().min(1, "Country or region is required."),
  role: z.string().trim().optional().default(""),
  researchInterests: z.string().trim().optional().default(""),
  attendanceMode: z.string().trim().min(1, "Please choose an attendance mode."),
  dietaryRestrictions: z.string().trim().optional().default(""),
  consent: z.boolean().refine((value) => value, "Consent is required."),
  additionalNotes: z.string().trim().optional().default(""),
});

export type RegistrationData = z.infer<typeof registrationSchema>;

export function getRegistrationFieldErrors(data: unknown) {
  const result = registrationSchema.safeParse(data);

  if (result.success) {
    return {};
  }

  return result.error.flatten().fieldErrors;
}
