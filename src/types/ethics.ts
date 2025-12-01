export interface EthicsItem {
  title: string;
  description: string;
}

export interface EthicsData {
  authorsEthics: EthicsItem[];
  reviewersEthics: EthicsItem[];
  committeeEthics: EthicsItem[];
  plagiarismPolicy: string;
  postPublicationPolicy: string;
}

export const ethicsData: EthicsData = {
  authorsEthics: [
    {
      title: "Originality",
      description: "All submissions must represent original work. Plagiarism in any form, including self-plagiarism, is strictly prohibited."
    },
    {
      title: "Authorship",
      description: "Only individuals who have made significant contributions to the research should be listed as authors."
    },
    {
      title: "Accuracy",
      description: "Authors must ensure that their data, results, and methodologies are accurately reported without fabrication, falsification, or manipulation."
    },
    {
      title: "Citations",
      description: "Proper acknowledgment of all sources, prior work, and funding bodies must be provided."
    },
    {
      title: "Conflicts of Interest",
      description: "Authors must disclose any potential conflicts of interest that may influence the research outcomes."
    },
    {
      title: "Concurrent Submissions",
      description: "Submissions must not be under review or published elsewhere."
    }
  ],
  reviewersEthics: [
    {
      title: "Confidentiality",
      description: "Reviewers must treat all manuscripts as confidential documents and must not share or use the content for personal advantage."
    },
    {
      title: "Objectivity",
      description: "Reviews should be conducted impartially and objectively, providing constructive feedback without personal criticism."
    },
    {
      title: "Conflict of Interest",
      description: "Reviewers must decline assignments that present any potential conflict of interest with authors or content."
    },
    {
      title: "Timeliness",
      description: "Reviewers should complete evaluations within the allotted time frame."
    }
  ],
  committeeEthics: [
    {
      title: "Fair Review Process",
      description: "Manuscripts will be evaluated solely on academic merit, relevance, originality, and clarity."
    },
    {
      title: "Confidentiality",
      description: "The committee must maintain confidentiality of submissions and reviewer identities."
    },
    {
      title: "Handling Misconduct",
      description: "In cases of suspected ethical violations—plagiarism, data manipulation, improper authorship, etc.—the committee will conduct an investigation and may reject the paper, retract published work, notify institutions, or impose future submission bans."
    },
    {
      title: "Transparency",
      description: "All policies related to submission, review, acceptance, and publication will be clearly communicated."
    }
  ],
  plagiarismPolicy: "The conference uses plagiarism detection tools like Turnitin to ensure originality. Any submission found to contain plagiarised content, duplicated publications, falsified data, or unethical research practices will be rejected immediately. Serious offences may lead to reporting the case to the author's institution and other relevant bodies.",
  postPublicationPolicy: "If an ethical issue is identified after publication, such as errors or misconduct, the conference committee will take appropriate actions, which may include issuing corrections, retractions, or notifications to readers and databases."
};