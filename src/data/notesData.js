export const notesData = {
  days: [
    {
      id: '1',
      number: 'DAY 1',
      title: 'Fundamentals of AI and ML',
      weight: 'Domain 1 · 20%',
      colorClass: 'd1',
      allDayTitle: 'Day 1 · Fundamentals of AI and ML · Domain 1 · 20%',
      sections: [
        {
          title: 'AI Hierarchy',
          content: {
            type: 'mono-block',
            text: `AI ⊃ ML ⊃ Deep Learning

AI  = any technique simulating human decision-making
ML  = learns from data (no hard-coded rules)
DL  = neural networks with many layers, needs massive data`
          }
        },
        {
          title: 'ML Types',
          content: {
            type: 'table',
            headers: ['Type', 'Key trait', 'AWS'],
            rows: [
              { type: 'Supervised', trait: 'Labelled data → classify / regress', aws: 'SageMaker XGBoost', highlight: true },
              { type: 'Unsupervised', trait: 'No labels → cluster / reduce', aws: 'SageMaker K-Means', highlight: true },
              { type: 'Reinforcement', trait: 'Agent + rewards → trial & error', aws: 'AWS DeepRacer', highlight: true }
            ]
          }
        },
        {
          title: 'ML Lifecycle → AWS Services',
          content: {
            type: 'mono-block',
            text: `Define → Collect (S3, Kinesis)
→ Preprocess (Glue, Data Wrangler)
→ Feature Eng (Data Wrangler, Feature Store)
→ Train (SageMaker Training Jobs)
→ Evaluate → Deploy (SageMaker Endpoints)
→ Monitor (Model Monitor)`
          }
        },
        {
          title: 'Training vs Inference',
          content: {
            type: 'table',
            headers: ['', 'Training', 'Inference'],
            rows: [
              { label: 'Cost', training: 'High GPU compute', inference: 'Optimise for speed' },
              { label: 'Frequency', training: 'Periodic', inference: 'Every request' },
              { label: 'Data', training: 'Historical', inference: 'Live / new' },
              { label: 'AWS', training: 'Training Jobs', inference: 'Endpoints / Batch Transform' }
            ]
          }
        },
        {
          title: 'Evaluation Metrics Decision Tree',
          content: {
            type: 'mono-block',
            text: `Regression?            → RMSE / MAE / R²
Classification?
  Imbalanced dataset?  → F1 / AUC-ROC
  Miss positive = bad  → Recall  (medical, fraud)
  False alarm = bad    → Precision (spam, moderation)
  Balanced + simple    → Accuracy`
          }
        },
        {
          title: 'Overfitting vs Underfitting',
          content: {
            type: 'table',
            headers: ['', 'Underfitting', 'Overfitting'],
            rows: [
              { label: 'Train error', under: 'High', over: 'Low' },
              { label: 'Test error', under: 'High', over: 'High' },
              { label: 'Cause', under: 'Model too simple', over: 'Model too complex' },
              { label: 'Fix', under: 'More features, complexity, epochs', over: 'More data, regularise, simplify' }
            ]
          }
        }
      ]
    },
    {
      id: '2',
      number: 'DAY 2',
      title: 'Data, Features & Model Evaluation',
      weight: 'Domain 1 cont.',
      colorClass: 'd1',
      allDayTitle: 'Day 2 · Data Preprocessing, Features & Model Evaluation · Domain 1 cont.',
      sections: [
        {
          title: 'Preprocessing Techniques',
          content: {
            type: 'mono-block',
            text: `Missing values: delete / impute / flag
Outliers:       cap / log-transform / remove
Normalisation:  min-max → 0 to 1 range
Standardisation: z-score → mean=0, std=1
Encoding:
  One-hot  → nominal categories (no order)
  Label    → ordinal / tree models only
  Target   → mean target value (leakage risk!)`
          }
        },
        {
          title: 'Data Splits',
          content: {
            type: 'mono-block',
            text: `Train      ~70%  — model learns from this
Validation ~15%  — tune hyperparams, catch overfit early
Test       ~15%  — held aside, used ONCE for final eval

Cross-validation = K-fold, more robust, less waste
Never touch test set until final evaluation`
          }
        },
        {
          title: 'Feature Engineering',
          content: {
            type: 'mono-block',
            text: `Selection:  drop correlated / low-variance features
Creation:   timestamp → hour_of_day, is_weekend
            price × qty → total_revenue
Reduction:  PCA → compress high-dimensional data

AWS: SageMaker Data Wrangler (visual)
     AWS Glue DataBrew (pipeline-scale)`
          }
        },
        {
          title: 'Confusion Matrix',
          content: {
            type: 'mono-block',
            text: `               Pred +       Pred -
Actual +    TP (caught)   FN (missed!)
Actual -    FP (alarm)    TN (correct)

Accuracy  = (TP+TN) / Total
Precision = TP / (TP+FP)  → low false alarms
Recall    = TP / (TP+FN)  → low missed cases
F1        = harmonic mean of P & R`
          }
        },
        {
          title: 'Regularisation',
          content: {
            type: 'mono-block',
            text: `L1 (Lasso)    → drives weights to 0 → feature select
L2 (Ridge)    → shrinks weights → general overfit fix
Dropout       → random neuron deactivation (NNs)
Early stopping → stop when val loss rises

Data bias types:
sampling / historical / measurement
survivorship / representation / feedback loop`
          }
        },
        {
          title: 'Key AWS Services (Domain 1)',
          content: {
            type: 'table',
            headers: ['Service', 'Role'],
            rows: [
              { service: 'AWS Glue', role: 'ETL pipelines, schema crawling' },
              { service: 'Data Wrangler', role: 'Visual feature engineering' },
              { service: 'Feature Store', role: 'Reuse features across teams' },
              { service: 'SageMaker Clarify', role: 'Bias detection (data + model)' },
              { service: 'Model Monitor', role: 'Drift detection post-deploy' },
              { service: 'Amazon Athena', role: 'SQL queries on S3 data' }
            ]
          }
        }
      ]
    },
    {
      id: '3',
      number: 'DAY 3',
      title: 'Fundamentals of Generative AI',
      weight: 'Domain 2 · 24%',
      colorClass: 'd2',
      allDayTitle: 'Day 3 · Fundamentals of Generative AI · Domain 2 · 24%',
      sections: [
        {
          title: 'Foundation Models',
          content: {
            type: 'mono-block',
            text: `Trained on massive broad datasets
Self-supervised learning
Generalise across many tasks
Adapted via prompting or fine-tuning

Key properties:
Scale → billions of parameters
Generalisation → one model, many tasks
Emergent capabilities → appear at scale
Transfer learning → pre-train once, adapt cheaply`
          }
        },
        {
          title: 'LLM Core Concepts',
          content: {
            type: 'mono-block',
            text: `Tokens    ≈ ¾ of a word, ~3-4 chars
           Pricing + limits measured in tokens
Embeddings = dense vectors encoding meaning
           Semantic similarity = geometric proximity
Context   = max tokens model can see at once
Window      (input + output combined)
           Running out → model forgets earlier content
Attention  = model learns what to focus on per token
           Enables parallelisation → massive scale`
          }
        },
        {
          title: 'Prompting Techniques',
          content: {
            type: 'table',
            headers: ['Type', 'Description', 'When'],
            rows: [
              { type: 'Zero-shot', desc: 'Task only, no examples', when: 'Well-known tasks', highlight: true },
              { type: 'Few-shot', desc: 'Task + input/output examples', when: 'Specific format needed', highlight: true },
              { type: 'CoT', desc: '"Think step by step"', when: 'Reasoning / maths', highlight: true },
              { type: 'System', desc: 'Persona/constraints (separate param)', when: 'Always in prod', highlight: true }
            ]
          }
        },
        {
          title: 'Inference Parameters',
          content: {
            type: 'mono-block',
            text: `Temperature  low  → deterministic, factual, code
             high → creative, varied, brainstorm
             0    → always picks highest-prob token
Top-P        0.9  → nucleus sampling, adaptive
Top-K        50   → hard cutoff at K tokens
Max Tokens        → output length hard cap
Stop sequences    → halt on specific string match`
          }
        },
        {
          title: 'GenAI Limitations (exam favourites)',
          content: {
            type: 'mono-block',
            text: `Hallucination    → confident but wrong output
                   Fix: RAG, grounding, human review
Knowledge cutoff → no awareness of recent events
                   Fix: RAG, tool use
Context window   → can't process long docs fully
                   Fix: chunking, summarisation, RAG
Prompt injection → malicious override of system prompt
                   Fix: Guardrails content filters
Bias             → inherited from training data
                   Fix: RLHF, guardrails, diverse data`
          }
        },
        {
          title: 'Amazon Bedrock + Titan',
          content: {
            type: 'mono-block',
            text: `Bedrock = single API, multi-provider, serverless
          private (data NOT used for training)
          IAM + VPC + KMS + CloudTrail integrated

Providers: Anthropic / Meta / Mistral /
           Stability AI / Cohere / AI21 / Amazon

Titan Text (Lite / Express / Premier) → text gen
Titan Embeddings                      → vectors for RAG
Titan Multimodal Embeddings           → text + image
Titan Image Generator                 → text-to-image

Key features: Playground / Knowledge Bases /
              Agents / Guardrails / Model Eval / Fine-tuning`
          }
        },
        {
          title: 'Other GenAI Services',
          content: {
            type: 'table',
            headers: ['Service', 'What it does'],
            rows: [
              { service: 'Amazon Q Business', desc: 'Enterprise chatbot over internal docs' },
              { service: 'Amazon Q Developer', desc: 'AI coding assistant (ex-CodeWhisperer)' },
              { service: 'Amazon Kendra', desc: 'Intelligent enterprise search' },
              { service: 'AWS PartyRock', desc: 'No-code GenAI app prototyping' },
              { service: 'Amazon Lex', desc: 'Conversational chatbot builder' },
              { service: 'Amazon Comprehend', desc: 'NLP: sentiment, entities, key phrases' },
              { service: 'Amazon Rekognition', desc: 'Computer vision (NOT generative)' },
              { service: 'Amazon Polly', desc: 'Text-to-speech' },
              { service: 'Amazon Transcribe', desc: 'Speech-to-text' }
            ]
          }
        }
      ]
    },
    {
      id: '4',
      number: 'DAY 4',
      title: 'Applications of Foundation Models',
      weight: 'Domain 3 · 28% ★ Highest',
      colorClass: 'd3',
      allDayTitle: 'Day 4 · Applications of Foundation Models · Domain 3 · 28% ★',
      sections: [
        {
          title: 'RAG Pipeline',
          content: {
            type: 'mono-block',
            text: `INDEXING (offline):
  Ingest → Chunk → Embed (Titan Embeddings)
  → Store in vector DB (OpenSearch Serverless)

QUERY (real-time):
  Embed query → Semantic search → Retrieve top-K
  → Augment prompt → FM generates response

AWS service: Bedrock Knowledge Bases (fully managed)`
          }
        },
        {
          title: 'RAG vs Fine-Tuning',
          content: {
            type: 'table',
            headers: ['', 'RAG', 'Fine-Tuning'],
            rows: [
              { label: 'Fixes', rag: 'Knowledge gap', ft: 'Behaviour gap' },
              { label: 'Weights', rag: 'Unchanged', ft: 'Updated' },
              { label: 'New data', rag: 'Just re-index', ft: 'Retrain needed' },
              { label: 'Cost', rag: 'Low', ft: 'Higher' },
              { label: 'Best for', rag: 'Private, live docs', ft: 'Style, tone, domain vocab' }
            ],
            footer: 'Pro tip: combine both — fine-tune for behaviour, RAG for knowledge'
          }
        },
        {
          title: 'Customisation Spectrum',
          content: {
            type: 'mono-block',
            text: `Cheapest → Most Expensive:
Prompting → Few-shot → RAG → Fine-tuning
→ Continued Pre-training → Train from scratch

Fine-tuning types:
Standard         → prompt-completion pairs (JSONL in S3)
Continued pretraining → unlabelled domain text
RLHF             → human feedback → aligned assistant`
          }
        },
        {
          title: 'Bedrock Agents (ReAct Pattern)',
          content: {
            type: 'mono-block',
            text: `ReAct = Reason → Act → Observe → Repeat

Components:
Action Groups   → OpenAPI schema → Lambda functions
Knowledge Bases → RAG tool available to agent
Session context → multi-turn conversation memory

Use when: task needs multiple API calls + planning
NOT Knowledge Bases alone (single retrieval only)

Agents CAN USE Knowledge Bases — they compose`
          }
        },
        {
          title: 'GenAI Evaluation Metrics',
          content: {
            type: 'table',
            headers: ['Metric', 'Use for', 'Measures'],
            rows: [
              { metric: 'ROUGE', use: 'Summarisation', measures: 'Overlap with reference', highlight: true },
              { metric: 'BLEU', use: 'Translation', measures: 'N-gram overlap', highlight: true },
              { metric: 'BERTScore', use: 'Semantic quality', measures: 'Embedding similarity', highlight: true },
              { metric: 'Perplexity', use: 'Fluency', measures: 'Lower = better', highlight: true }
            ]
          }
        },
        {
          title: 'Vector Databases on AWS',
          content: {
            type: 'table',
            headers: ['Service', 'Role'],
            rows: [
              { service: 'OpenSearch Serverless', role: 'Default for Bedrock Knowledge Bases' },
              { service: 'Aurora / RDS pgvector', role: 'PostgreSQL-native vector search' },
              { service: 'Amazon MemoryDB', role: 'Redis-compatible, ultra-low latency' },
              { service: 'Amazon Kendra', role: 'Managed intelligent search (not raw vector)' }
            ]
          }
        }
      ]
    },
    {
      id: '5',
      number: 'DAY 5',
      title: 'Advanced Model Applications',
      weight: 'Domain 3 cont. · 28% ★',
      colorClass: 'd3',
      allDayTitle: 'Day 5 · Advanced Model Applications · Domain 3 cont. · 28% ★',
      sections: [
        {
          title: 'Inference Parameters — Production Configs',
          content: {
            type: 'table',
            headers: ['Use case', 'Temp', 'Top-P', 'Top-K'],
            rows: [
              { use: 'Factual Q&A / extraction', temp: '0–0.2', topp: '0.9', topk: '40' },
              { use: 'Summarisation', temp: '0.3–0.5', topp: '0.9', topk: '50' },
              { use: 'Conversation', temp: '0.5–0.7', topp: '0.9', topk: '50' },
              { use: 'Creative writing', temp: '0.8–1.0', topp: '0.95', topk: '100+' },
              { use: 'Code generation', temp: '0–0.2', topp: '0.95', topk: '40' }
            ]
          }
        },
        {
          title: 'Multi-Modal on AWS',
          content: {
            type: 'table',
            headers: ['Service', 'Modality'],
            rows: [
              { service: 'Titan Multimodal Embeddings', modality: 'Text + image → vectors' },
              { service: 'Titan Image Generator', modality: 'Text → image + editing' },
              { service: 'Claude 3 (Bedrock)', modality: 'Image + text → text' },
              { service: 'Stable Diffusion (Bedrock)', modality: 'Text → high-quality image' },
              { service: 'Amazon Rekognition', modality: 'Image/video analysis (NOT generative)' },
              { service: 'Amazon Textract', modality: 'Extract text/tables from scanned docs' }
            ]
          }
        },
        {
          title: 'Cost Optimisation',
          content: {
            type: 'mono-block',
            text: `Model size matching → smaller model for simpler tasks
On-Demand       → pay per token, variable volume
Provisioned     → per hour, consistent high volume
                   Required for fine-tuned models
Streaming       → tokens delivered as generated
                   Reduces PERCEIVED latency
Prompt caching  → reused system prompts cached
                   Saves tokens + latency at scale
Distillation    → small student mimics large teacher
Quantisation    → reduce weight precision → faster`
          }
        },
        {
          title: 'Bedrock Guardrails — 6 Controls',
          content: {
            type: 'mono-block',
            text: `1. Content Filters    → hate/violence/sexual/insults/
                             misconduct/prompt attacks
                             4 threshold levels each
2. Denied Topics     → natural language topic suppression
3. Word Filters      → exact word/phrase blocking
4. PII Redaction     → BLOCK or ANONYMISE per entity type
5. Grounding Check   → response must be in source docs (RAG)
6. Contextual Ground → response relevant to user query

⚠ Applies to BOTH input (user) AND output (model)`
          }
        },
        {
          title: 'Advanced Prompting Patterns',
          content: {
            type: 'table',
            headers: ['Pattern', 'Description'],
            rows: [
              { pattern: 'ReAct', desc: 'Reason + Act alternation — how Agents work', highlight: true },
              { pattern: 'Self-consistency', desc: 'Multiple runs, majority vote → reliable', highlight: true },
              { pattern: 'Prompt chaining', desc: 'Output of step N feeds into step N+1', highlight: true },
              { pattern: 'Meta-prompting', desc: 'LLM writes prompts for another LLM', highlight: true }
            ]
          }
        },
        {
          title: 'PartyRock + Model Evaluation',
          content: {
            type: 'mono-block',
            text: `PartyRock:
  No-code GenAI app prototyping
  For: learning, demos, non-technical users
  NOT for: production, enterprise data, IAM/VPC

Bedrock Model Evaluation:
  Automatic → ROUGE/BLEU/BERTScore/accuracy/F1
  Human     → SageMaker Ground Truth, custom criteria
  Use to:   compare models before deployment

Amazon A2I:
  Human-in-the-loop review workflows
  Trigger: confidence below threshold
  Workforce: private / vendor / Mechanical Turk`
          }
        }
      ]
    },
    {
      id: '6',
      number: 'DAY 6',
      title: 'Responsible AI',
      weight: 'Domain 4 · 14%',
      colorClass: 'd4',
      allDayTitle: 'Day 6 · Responsible AI · Domain 4 · 14%',
      sections: [
        {
          title: '6 Principles of Responsible AI',
          content: {
            type: 'table',
            headers: ['Principle', 'What it means'],
            rows: [
              { principle: 'Fairness', means: 'Equitable outcomes across all groups', highlight: true },
              { principle: 'Explainability', means: 'Understandable predictions (global + local)', highlight: true },
              { principle: 'Privacy', means: 'Data minimisation, protection from leakage', highlight: true },
              { principle: 'Transparency', means: 'Open about capabilities, limits, training', highlight: true },
              { principle: 'Robustness', means: 'Reliable on edge cases + adversarial inputs', highlight: true },
              { principle: 'Governance', means: 'Organisational accountability processes', highlight: true }
            ]
          }
        },
        {
          title: 'Bias Types',
          content: {
            type: 'mono-block',
            text: `Pre-training (data):
  Sampling      → collection skews groups
  Historical    → data reflects past discrimination
  Measurement   → recorded differently per group
  Survivorship  → only "survivors" in data
  Representation → groups underrepresented

In-training:
  Aggregation   → treats heterogeneous pop as one
  Optimisation  → metric hides group disparity

Post-training:
  Evaluation    → benchmark ≠ deployment population
  Deployment    → used outside intended context
  Feedback loop → predictions influence future data`
          }
        },
        {
          title: 'SageMaker Clarify',
          content: {
            type: 'mono-block',
            text: `Pre-training bias  → dataset imbalance metrics
Post-training bias → prediction disparity metrics
Explainability     → SHAP values (global + local)
Integrates with    → Model Monitor (continuous tracking)

Key metrics:
  Class Imbalance (CI)   → dataset representation
  DPP                    → positive label disparity
  Disparate Impact (DI)  → <0.8 = likely discrimination
  Accuracy Difference    → per-group accuracy gap

Clarify  = bias + explainability
Monitor  = drift + quality degradation
Both     = comprehensive post-deploy coverage`
          }
        },
        {
          title: 'Explainability Methods',
          content: {
            type: 'mono-block',
            text: `SHAP (SHapley Additive exPlanations):
  Gold standard. Game theory basis.
  Fair attribution of prediction to each feature.
  Works globally (whole dataset) + locally (one prediction).
  Used by SageMaker Clarify.

LIME:
  Local surrogate model approximation.
  Less precise than SHAP, model-agnostic.

Feature Importance:
  Built into tree models (XGBoost, RF).
  Fast but less precise — no local explanation.`
          }
        },
        {
          title: 'Privacy Techniques',
          content: {
            type: 'mono-block',
            text: `Differential Privacy → add calibrated noise
  Prevents membership inference attacks

Federated Learning  → train across distributed data
  Only weight updates shared, not raw data
  Use: hospitals collaborating without sharing records

Anonymisation       → irreversible PII removal
Pseudonymisation    → replaceable with key
Generalisation      → specific → ranges
Synthetic data      → statistically similar, no real records

AWS Macie           → PII discovery in S3 buckets`
          }
        },
        {
          title: 'Responsible AI AWS Service Map',
          content: {
            type: 'table',
            headers: ['Service', 'Function'],
            rows: [
              { service: 'SageMaker Clarify', func: 'Bias detection + SHAP explainability' },
              { service: 'Model Monitor', func: 'Drift detection post-deployment' },
              { service: 'SageMaker Model Cards', func: 'Structured model documentation' },
              { service: 'Amazon A2I', func: 'Human-in-the-loop review workflows' },
              { service: 'Bedrock Guardrails', func: 'Content safety + PII + grounding' },
              { service: 'AWS Macie', func: 'PII discovery in S3' },
              { service: 'AWS CloudTrail', func: 'Immutable AI service API audit logs' },
              { service: 'AWS Audit Manager', func: 'Compliance evidence collection' },
              { service: 'Titan Image Generator', func: 'C2PA watermarking of AI images' }
            ]
          }
        },
        {
          title: 'Exam Scenario Patterns — Responsible AI',
          content: {
            type: 'mono-block',
            text: `"Explain individual prediction to regulator"    → SHAP values via SageMaker Clarify
"Human review when model is uncertain"         → Amazon A2I (confidence threshold)
"Bias detected after deployment"               → Clarify + Model Monitor
"Document model for compliance auditors"       → SageMaker Model Cards
"PII found in S3 training data"               → AWS Macie
"Prove image is AI-generated"                  → C2PA watermark (Titan Image Generator)
"Regulatory compliance audit evidence"         → AWS Audit Manager
"Log all AI service API calls for audit"       → AWS CloudTrail
"Prevent model discussing competitor topics"   → Bedrock Guardrails (Denied Topics)
"Hallucination in RAG response"                → Guardrails Grounding Check`,
            fullWidth: true
          }
        }
      ]
    }
  ]
};
