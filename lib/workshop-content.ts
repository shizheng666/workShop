export type NavigationItem = {
  label: string;
  href: string;
};

export type EventFact = {
  label: string;
  value: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export type ImportantNote = {
  title: string;
  detail: string;
};

export type PersonProfile = {
  name: string;
  affiliation: string;
  role: string;
  email: string;
  summary: string;
};

export type SubmissionPortal = {
  siteStatus: "pending" | "ready";
  label: string;
  title: string;
  description: string;
  portalName: string;
  portalUrl: string;
  ctaLabel: string;
  pendingLabel: string;
  status: string;
  officialNotice: string;
  requestChecklist: string[];
  supportEmail: string;
  dataAccessNote: string;
  attendanceNote: string;
  policyNote: string;
};

export type ResearchPillar = {
  title: string;
  detail: string;
};

export type ResearchTopic = {
  title: string;
  detail: string;
};

export type ReviewTimeline = {
  paperSubmissionDeadline: string;
  reviewPeriod: string;
  authorNotifications: string;
  cameraReadyDeadline: string;
};

export type ReviewPolicy = {
  title: string;
  description: string;
  timeline: ReviewTimeline;
  reviewRule: string;
  conflictOfInterestNote: string;
};

export type DiversityPolicy = {
  title: string;
  description: string;
  representationSummary: string;
};

export type EthicsCompliance = {
  title: string;
  items: string[];
};

export type RouteHighlight = {
  title: string;
  href: string;
  description: string;
};

export const workshopContent = {
  title: "Human-Centric Video Generation",
  shortName: "HVG",
  subtitle:
    "Advancing controllable, realistic, and physically plausible human video synthesis for the ICPR 2026 research community.",
  event: {
    dateLabel: "Friday, August 21, 2026",
    timeLabel: "8:30-12:30",
    locationLabel: "Lyon, France",
    venueLabel: "ICPR 2026 Workshop Venue",
    submissionLabel: "Paper submission via CMT",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Submission Entry", href: "/submission" },
    { label: "Committee", href: "/committee" },
  ] satisfies NavigationItem[],
  facts: [
    { label: "Date", value: "Friday, August 21, 2026" },
    { label: "Time", value: "8:30-12:30" },
    { label: "Venue", value: "Lyon, France" },
    { label: "Format", value: "Morning workshop" },
  ] satisfies EventFact[],
  routeHighlights: [
    {
      title: "Schedule",
      href: "/schedule",
      description:
        "Review the Friday morning program, session pacing, and venue-oriented timing before the workshop starts.",
    },
    {
      title: "Submission Entry",
      href: "/submission",
      description:
        "Access the paper-submission entrance, CMT guidance, and pre-submission policy information in one place.",
    },
    {
      title: "Committee",
      href: "/committee",
      description:
        "Browse the current General Chairs roster and the shared workshop contact point for organizational questions.",
    },
  ] satisfies RouteHighlight[],
  overview: [
    "The Workshop on Human-Centric Video Generation (HVG) focuses on advancing methodologies for synthesizing realistic 2D human videos guided by multimodal control signals such as text, audio, and pose.",
    "The workshop emphasizes three core technical pillars: conditional motion synthesis, quality assurance for temporal and anatomical fidelity, and evaluation frameworks for temporal coherence, action accuracy, and perceptual realism.",
    "HVG brings together researchers in generative AI, motion analysis, and human-computer interaction while keeping the site structure flexible for later updates to the detailed agenda, speaker list, and organizer profiles.",
  ],
  researchScope: {
    summary:
      "HVG focuses on synthesizing realistic 2D human videos guided by multimodal control signals such as text, audio, and pose, while addressing temporal consistency, anatomical fidelity, and environment interaction.",
    pillars: [
      {
        title: "Conditional Motion Synthesis",
        detail:
          "Advance text-to-action alignment, audio-driven co-speech gestures, and pose-guided motion transfer for controllable human video generation.",
      },
      {
        title: "Quality Assurance",
        detail:
          "Study occlusion handling, deformation mitigation, and appearance consistency for long and diverse video sequences.",
      },
      {
        title: "Evaluation Frameworks",
        detail:
          "Develop reliable metrics for temporal coherence, action accuracy, perceptual realism, and biomechanical plausibility.",
      },
    ] satisfies ResearchPillar[],
    topics: [
      {
        title: "Text-Driven Synthesis",
        detail:
          "Generating human videos from textual descriptions with accurate action-semantic alignment.",
      },
      {
        title: "Audio-Gesture Synchronization",
        detail:
          "Modeling co-speech gesture dynamics from audio-visual correlations.",
      },
      {
        title: "Pose-Guided Motion Transfer",
        detail:
          "Transferring source motion to target subjects while preserving identity and context.",
      },
      {
        title: "Multi-Conditional Animation",
        detail:
          "Integrating heterogeneous controls such as text, pose, and audio for composition-aware generation.",
      },
      {
        title: "Long-Form Synthesis",
        detail:
          "Maintaining consistency and diversity in extended human video sequences.",
      },
      {
        title: "Interactive Generation",
        detail:
          "Enabling real-time user control via prompts, sketches, or physical simulation cues.",
      },
      {
        title: "Dataset Curation",
        detail:
          "Constructing cross-modal datasets with annotated human motion and multi-view sequences.",
      },
      {
        title: "3D-Consistent Avatars",
        detail:
          "Bridging 2D generation with 3D-aware representations for viewpoint-invariant synthesis.",
      },
    ] satisfies ResearchTopic[],
  },
  scheduleItems: [
    {
      time: "8:30-8:45",
      title: "Opening and Welcome",
      description:
        "Opening remarks and a workshop overview focused on human-centric video generation, multimodal control, and evaluation challenges.",
    },
    {
      time: "8:45-10:30",
      title: "Invited Talks and Featured Presentations",
      description:
        "Talks on text-driven human synthesis, audio-driven gesture generation, pose-guided animation, and long-form controllable video generation.",
    },
    {
      time: "10:30-11:00",
      title: "Coffee Break",
      description:
        "Coffee service follows the ICPR venue arrangement for the Friday morning workshop block.",
    },
    {
      time: "11:00-12:30",
      title: "Discussion, Spotlight Sharing, and Closing",
      description:
        "Discussion on benchmarks, datasets, 3D-consistent avatars, and future directions for human-centric generative video research.",
    },
  ] satisfies ScheduleItem[],
  importantNotes: [
    {
      title: "Lunch Service",
      detail:
        "Lunch will be served between 12:30-13:30 on Friday. Please plan your lunch within the official venue window.",
    },
    {
      title: "Coffee Breaks",
      detail:
        "Coffee will be available between 10:00-11:00 and 15:00-16:00 on Friday, following the venue schedule.",
    },
    {
      title: "Proceedings Policy",
      detail:
        "Workshop proceedings are expected to follow the LNCS format and should remain aligned with the official ICPR 2026 workshop requirements.",
    },
    {
      title: "Workshop Topics",
      detail:
        "The workshop scope includes text-driven synthesis, audio-driven gesture generation, pose-guided transfer, multi-conditional animation, long-form generation, interactive control, evaluation metrics, dataset curation, and 3D-consistent avatars.",
    },
    {
      title: "Camera-ready Deadline",
      detail:
        "For workshops publishing in the conference proceedings, the camera-ready deadline communicated by the organizer email is June 20, 2026.",
    },
    {
      title: "Presenting Author Registration",
      detail:
        "Each accepted paper should have the presenting author registered according to the ICPR 2026 registration policy.",
    },
  ] satisfies ImportantNote[],
  // 这里把投稿入口、评审和政策类信息全部集中在内容配置里，
  // 后续拿到正式 CMT 链接或更新政策文字时，不需要去多个页面组件里重复修改。
  submissionPortal: {
    siteStatus: "pending",
    label: "Paper Submission",
    title: "Paper Submission via CMT",
    description:
      "Authors should submit papers through CMT. CMT is used for submission and review management for the HVG workshop.",
    portalName: "CMT",
    portalUrl: "",
    ctaLabel: "Official CMT Portal",
    pendingLabel: "CMT portal pending",
    status:
      "The workshop-specific CMT portal URL will be published once the submission site is activated.",
    officialNotice:
      "The official CMT submission entrance will be announced on this page after the workshop site request is approved.",
    requestChecklist: [
      "Site request in progress with the workshop organizers and chairs.",
      "Official submission URL awaiting activation in Microsoft CMT.",
      "Website button will be updated immediately after approval.",
    ],
    supportEmail: "contact@workshop-placeholder.org",
    dataAccessNote:
      "Workshop chairs with appropriate CMT permissions can access submission-side metadata such as paper titles, abstracts, author names, author emails, primary contact author details, and review-process-related records. CMT does not replace general conference attendance registration.",
    attendanceNote:
      "General ICPR attendance registration is managed separately by the main conference and is different from workshop paper submission.",
    policyNote:
      "CMT supports submission handling, reviewer assignment, discussion, and decision management. It is the correct place for paper workflow data, not a substitute for the conference attendance system.",
  } satisfies SubmissionPortal,
  reviewPolicy: {
    title: "Review Policy",
    description:
      "Submissions will undergo double-blind review following the workshop timeline below.",
    timeline: {
      paperSubmissionDeadline: "February 21, 2026 AoE (UTC-12)",
      reviewPeriod: "April 2, 2026",
      authorNotifications: "April 31, 2026",
      cameraReadyDeadline: "June 4, 2026",
    } satisfies ReviewTimeline,
    reviewRule:
      "Each submission will receive 3 reviews evaluating technical novelty, methodological rigor, and reproducibility.",
    conflictOfInterestNote:
      "Conflict-of-interest protocols will prevent organizers from reviewing affiliated works.",
  } satisfies ReviewPolicy,
  diversityPolicy: {
    title: "Diversity & Inclusion",
    description:
      "The workshop aims to represent a diverse range of technical perspectives across the human-centric video generation community.",
    representationSummary:
      "Speakers are selected across both academia and industry, while the organizing team aims for fair representation across gender, race, geography, institutional affiliation, and career stage.",
  } satisfies DiversityPolicy,
  ethicsCompliance: {
    title: "Ethics Compliance",
    items: [
      "All participants are welcome without restriction due to political, racial, or religious differences.",
      "The workshop organizers will follow the IAPR Statement of Ethics, and the IAPR Ethical Requirements for Authors will be prominently displayed on the conference website.",
    ],
  } satisfies EthicsCompliance,
  generalChairs: [
    {
      name: "Siyu Zhu",
      role: "General Chair",
      affiliation: "Professor, Fudan University",
      email: "siyuzhu@fudan.edu.cn",
      summary:
        "Leads the generative vision lab at Fudan University and has held senior roles at Alibaba Cloud and Altizure. His research spans generative models for video and 3D, physics-guided video synthesis, and image-based 3D reconstruction, alongside extensive service to AAAI, ICCV, and IEEE TVCG.",
    },
    {
      name: "Jingdong Wang",
      role: "General Chair",
      affiliation: "Chief Scientist for Computer Vision, Baidu",
      email: "wangjingdong@baidu.com",
      summary:
        "Chief Scientist for Computer Vision at Baidu and former Senior Principal Researcher at Microsoft Research Asia. He is widely known for contributions including HRNet, OCRNet, and DRFI, and is a Fellow of IAPR, IEEE, and CAE as well as an ACM Distinguished Member.",
    },
    {
      name: "Hui Li",
      role: "General Chair",
      affiliation: "PhD Candidate, Fudan University",
      email: "hli24@m.fudan.edu.cn",
      summary:
        "Researches human-centric video generation at Fudan University with related publications at CVPR and ICLR. Her open-source work in this area has attracted broad community attention, with GitHub projects collectively earning more than 13.5k stars.",
    },
    {
      name: "Mingwang Xu",
      role: "General Chair",
      affiliation: "PhD Candidate, Fudan University",
      email: "mingwang.xu.cq@gmail.com",
      summary:
        "Specializes in human-centric video generation and helped release the notable audio-driven facial video model Hallo. He has published HVG-related work at CVPR and contributed to organizing the large-scale TDSC-ABUS 2023 challenge.",
    },
    {
      name: "Kaihui Cheng",
      role: "General Chair",
      affiliation: "PhD Candidate, Fudan University",
      email: "Email to be confirmed",
      summary:
        "Focuses on generative modeling and has published related work at AAAI. He has also reviewed for IEEE Transactions on Visualization and Computer Graphics, while his public GitHub projects in this space have accumulated more than 700 stars.",
    },
    {
      name: "Jiahao Cui",
      role: "General Chair",
      affiliation: "PhD Candidate, Fudan University",
      email: "jhui25@m.fudan.edu.cn",
      summary:
        "Works on human-centric video generation with papers at CVPR, ICLR, and SIGGRAPH Asia. His corresponding open-source codebases have been well received by the community, surpassing 5,000 GitHub stars.",
    },
    {
      name: "Quanhui Tang",
      role: "General Chair",
      affiliation: "PhD Candidate, Fudan University",
      email: "qhtang25@m.fudan.edu.cn",
      summary:
        "A PhD candidate at Fudan University whose work centers on human-centric video generation. His research interests support the workshop's emphasis on controllable human video synthesis and related evaluation challenges.",
    },
    {
      name: "Enze Xie",
      role: "General Chair",
      affiliation: "Senior Research Scientist, NVIDIA",
      email: "xieenze@connect.hku.hk",
      summary:
        "Senior Research Scientist at NVIDIA and former Principal Researcher at Huawei Noah's Ark Lab. His work spans generative AI, computer vision, and deep learning, including contributions to SANA, SegFormer, and NVIDIA's generative and robotics systems.",
    },
    {
      name: "Nicu Sebe",
      role: "General Chair",
      affiliation: "Professor, University of Trento",
      email: "sebe@disi.unitn.it",
      summary:
        "A leading researcher in multimedia retrieval, vision, and human-computer interaction at the University of Trento. He has served major conferences and journals for years, is a Fellow of ELLIS and IAPR, and co-edits the Computer Vision and Image Understanding journal.",
    },
    {
      name: "Michael J. Black",
      role: "General Chair",
      affiliation: "Professor, Max Planck Institute for Intelligent Systems",
      email: "black@tuebingen.mpg.de",
      summary:
        "Professor at the Max Planck Institute for Intelligent Systems and founder of the Perceiving Systems department. His foundational work in computer vision, motion, and human modeling has earned major field awards, and he co-founded Body Labs, later acquired by Amazon.",
    },
  ] satisfies PersonProfile[],
  scientificCommittee: [] as PersonProfile[],
  contact: {
    email: "contact@workshop-placeholder.org",
    note: "Use the shared workshop contact desk for organizational questions, committee communication, and submission-related support.",
  },
  footer: {
    blurb:
      "This microsite is prepared for the ICPR 2026 Workshop on Human-Centric Video Generation (HVG), including workshop information, committee updates, and the paper-submission path via CMT.",
  },
} as const;
