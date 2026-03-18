import { NextResponse } from "next/server";

import {
  buildGoogleFormPayload,
  getGoogleFormConfig,
  getGoogleFormStatus,
} from "@/lib/registration/google-form";
import { registrationSchema } from "@/lib/registration/schema";
import { workshopContent } from "@/lib/workshop-content";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = registrationSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please provide all required registration fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const formConfig = getGoogleFormConfig();

    // 这个旧接口暂时保留给历史 Google Form 流程使用。
    // 当前首页已经切到 CMT 投稿模式，因此这里仅返回一个可回退的站内入口，避免构建或旧调用报错。
    if (!formConfig) {
      const status = getGoogleFormStatus();

      return NextResponse.json(
        {
          ok: false,
          mode: status.mode,
          message:
            "Google Form integration is not configured yet. Please use the setup guide or add the field mappings first.",
          fallbackUrl: workshopContent.submissionPortal.portalUrl || "#submission",
          missingKeys: status.missingKeys,
        },
        { status: 503 },
      );
    }

    const payload = buildGoogleFormPayload(parsed.data, formConfig);

    const response = await fetch(payload.formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.body.toString(),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Google Form rejected the submission. Please verify the form action URL and field mappings.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      mode: "configured",
      message: "Registration submitted successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected server error while processing registration.",
      },
      { status: 500 },
    );
  }
}
