"use client";

import { useState } from "react";

import {
  getRegistrationFieldErrors,
  type RegistrationData,
} from "@/lib/registration/schema";
import { cn } from "@/lib/utils";

type RegistrationFormProps = {
  fallbackUrl: string;
};

const initialValues: RegistrationData = {
  fullName: "",
  email: "",
  affiliation: "",
  countryOrRegion: "",
  role: "",
  researchInterests: "",
  attendanceMode: "",
  dietaryRestrictions: "",
  consent: false,
  additionalNotes: "",
};

type FormErrors = Partial<Record<keyof RegistrationData, string>>;

type FieldProps = {
  id: keyof RegistrationData;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold tracking-[0.02em] text-[var(--color-ink)]"
      >
        {label}
      </label>
      {children}
      {error ? <p className="text-sm text-[var(--color-danger)]">{error}</p> : null}
    </div>
  );
}

export function RegistrationForm({ fallbackUrl }: RegistrationFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  function updateValue<K extends keyof RegistrationData>(
    key: K,
    value: RegistrationData[K],
  ) {
    setValues((current) => ({
      ...current,
      [key]: value,
    }));
    setErrors((current) => ({
      ...current,
      [key]: undefined,
    }));
  }

  // 表单组件先在浏览器侧做一次轻量校验，让用户马上看到缺失项；
  // API 侧仍会再次使用同一份 schema 做最终验证，避免客户端被绕过。
  function validate(valuesToCheck: RegistrationData) {
    const fieldErrors = getRegistrationFieldErrors(valuesToCheck);

    return Object.fromEntries(
      Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0] ?? ""]),
    ) as FormErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields before submitting.",
      });
      return;
    }

    setStatus({ type: "submitting", message: "Submitting your registration..." });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(payload.message ?? "Registration could not be submitted right now.");
      }

      setStatus({
        type: "success",
        message: "Registration submitted successfully.",
      });
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Registration could not be submitted right now.",
      });
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" error={errors.fullName}>
          <input
            id="fullName"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            className={inputStyles(errors.fullName)}
            placeholder="Enter your full name"
          />
        </Field>

        <Field id="email" label="Email Address" error={errors.email}>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            className={inputStyles(errors.email)}
            placeholder="name@example.com"
          />
        </Field>

        <Field id="affiliation" label="Affiliation" error={errors.affiliation}>
          <input
            id="affiliation"
            value={values.affiliation}
            onChange={(event) => updateValue("affiliation", event.target.value)}
            className={inputStyles(errors.affiliation)}
            placeholder="University, lab, or company"
          />
        </Field>

        <Field id="countryOrRegion" label="Country / Region" error={errors.countryOrRegion}>
          <input
            id="countryOrRegion"
            value={values.countryOrRegion}
            onChange={(event) => updateValue("countryOrRegion", event.target.value)}
            className={inputStyles(errors.countryOrRegion)}
            placeholder="Country or region"
          />
        </Field>

        <Field id="role" label="Position / Role" error={errors.role}>
          <input
            id="role"
            value={values.role}
            onChange={(event) => updateValue("role", event.target.value)}
            className={inputStyles(errors.role)}
            placeholder="Faculty, student, industry, etc."
          />
        </Field>

        <Field id="attendanceMode" label="Attendance Mode" error={errors.attendanceMode}>
          <select
            id="attendanceMode"
            value={values.attendanceMode}
            onChange={(event) => updateValue("attendanceMode", event.target.value)}
            className={inputStyles(errors.attendanceMode)}
          >
            <option value="">Select an option</option>
            <option value="In person">In person</option>
            <option value="Online">Online</option>
            <option value="Not decided yet">Not decided yet</option>
          </select>
        </Field>
      </div>

      <Field id="researchInterests" label="Research Interests" error={errors.researchInterests}>
        <textarea
          id="researchInterests"
          value={values.researchInterests}
          onChange={(event) => updateValue("researchInterests", event.target.value)}
          className={textareaStyles(errors.researchInterests)}
          placeholder="Share your topics of interest"
          rows={4}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="dietaryRestrictions"
          label="Dietary Restrictions"
          error={errors.dietaryRestrictions}
        >
          <textarea
            id="dietaryRestrictions"
            value={values.dietaryRestrictions}
            onChange={(event) => updateValue("dietaryRestrictions", event.target.value)}
            className={textareaStyles(errors.dietaryRestrictions)}
            placeholder="Let us know about any dietary needs"
            rows={4}
          />
        </Field>

        <Field id="additionalNotes" label="Additional Notes" error={errors.additionalNotes}>
          <textarea
            id="additionalNotes"
            value={values.additionalNotes}
            onChange={(event) => updateValue("additionalNotes", event.target.value)}
            className={textareaStyles(errors.additionalNotes)}
            placeholder="Anything else we should know?"
            rows={4}
          />
        </Field>
      </div>

      <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-panel-soft)] p-5">
        <label className="flex items-start gap-3 text-sm leading-7 text-[var(--color-muted-ink)]">
          <input
            id="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateValue("consent", event.target.checked)}
            className="mt-1 size-4 rounded border-[var(--color-line-strong)] accent-[var(--color-accent)]"
          />
          <span>I agree to receive workshop updates by email.</span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-[var(--color-danger)]">{errors.consent}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          {status.message ? (
            <p
              className={cn(
                "text-sm leading-6",
                status.type === "success"
                  ? "text-[var(--color-success)]"
                  : status.type === "error"
                    ? "text-[var(--color-danger)]"
                    : "text-[var(--color-muted-ink)]",
              )}
            >
              {status.message}
            </p>
          ) : null}
          <a
            href={fallbackUrl}
            className="text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-ink)]"
          >
            Need the external setup guide?
          </a>
        </div>
        <button
          type="submit"
          disabled={status.type === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-night)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(106,176,255,0.24)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === "submitting" ? "Submitting..." : "Submit registration"}
        </button>
      </div>
    </form>
  );
}

function inputStyles(hasError?: string) {
  return cn(
    "min-h-12 w-full rounded-[1rem] border bg-[var(--color-elevated)] px-4 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted-ink)] focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(106,176,255,0.18)]",
    hasError
      ? "border-[var(--color-danger)] focus:ring-[rgba(214,75,57,0.16)]"
      : "border-[var(--color-line-strong)]",
  );
}

function textareaStyles(hasError?: string) {
  return cn(inputStyles(hasError), "min-h-28 py-3");
}
