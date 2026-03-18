import type { RegistrationData } from "@/lib/registration/schema";

type RegistrationFieldKey = keyof RegistrationData;

export type GoogleFormConfig = {
  formUrl: string;
  fieldMap: Record<RegistrationFieldKey, string>;
};

type EnvSource = Record<string, string | undefined>;

const ENV_KEYS: Record<RegistrationFieldKey, string> = {
  fullName: "GOOGLE_FORM_ENTRY_FULL_NAME",
  email: "GOOGLE_FORM_ENTRY_EMAIL",
  affiliation: "GOOGLE_FORM_ENTRY_AFFILIATION",
  countryOrRegion: "GOOGLE_FORM_ENTRY_COUNTRY_OR_REGION",
  role: "GOOGLE_FORM_ENTRY_ROLE",
  researchInterests: "GOOGLE_FORM_ENTRY_RESEARCH_INTERESTS",
  attendanceMode: "GOOGLE_FORM_ENTRY_ATTENDANCE_MODE",
  dietaryRestrictions: "GOOGLE_FORM_ENTRY_DIETARY_RESTRICTIONS",
  consent: "GOOGLE_FORM_ENTRY_CONSENT",
  additionalNotes: "GOOGLE_FORM_ENTRY_ADDITIONAL_NOTES",
};

export function getGoogleFormStatus(env: EnvSource = process.env) {
  const missingFieldKeys = Object.values(ENV_KEYS).filter((key) => !env[key]);
  const formUrl = env.GOOGLE_FORM_ACTION_URL;
  const isConfigured = Boolean(formUrl) && missingFieldKeys.length === 0;

  return {
    mode: isConfigured ? ("configured" as const) : ("fallback" as const),
    isConfigured,
    missingKeys: formUrl
      ? missingFieldKeys
      : ["GOOGLE_FORM_ACTION_URL", ...missingFieldKeys],
  };
}

// 这里把结构化数据转换成 Google Form 的 x-www-form-urlencoded 提交格式，
// 页面与业务代码无需接触 entry.xxxxx 这类内部编号。
export function buildGoogleFormPayload(
  data: RegistrationData,
  config: GoogleFormConfig,
) {
  const body = new URLSearchParams();

  (Object.keys(config.fieldMap) as RegistrationFieldKey[]).forEach((key) => {
    const entryId = config.fieldMap[key];
    const value = key === "consent" ? (data[key] ? "Yes" : "No") : String(data[key] ?? "");
    body.set(entryId, value);
  });

  return {
    formUrl: config.formUrl,
    body,
  };
}

export function getGoogleFormConfig(
  env: EnvSource = process.env,
): GoogleFormConfig | null {
  const status = getGoogleFormStatus(env);

  if (!status.isConfigured || !env.GOOGLE_FORM_ACTION_URL) {
    return null;
  }

  const fieldMap = {} as Record<RegistrationFieldKey, string>;

  (Object.entries(ENV_KEYS) as [RegistrationFieldKey, string][]).forEach(
    ([fieldKey, envKey]) => {
      fieldMap[fieldKey] = env[envKey] ?? "";
    },
  );

  return {
    formUrl: env.GOOGLE_FORM_ACTION_URL,
    fieldMap,
  };
}
