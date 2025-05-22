// types/api.ts

export interface SimulateRequest {
    task: string;
    deadline?: string;
    context_window?: string;
  }
  
  export interface SimulatedOption {
    uid: string;
    start_time: string;
    end_time: string;
    summary: string;
    rationale: string;
    stress_estimate: number;
    energy_match: number;
  }
  
  export interface FeedbackRequest {
    option_uid: string;
    user_action: 'edited' | 'accepted' | 'rejected';
    notes?: string;
  }
  