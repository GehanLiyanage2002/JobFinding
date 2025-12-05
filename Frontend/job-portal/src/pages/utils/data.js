import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Breifcase,
    Building2,
    LayoutDashboard,
    Plus,

} from 'lucide-react';

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description: "Find jobs that match your skills and preferences with our intelligent job matching system.",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create and customize your resume with our easy-to-use resume builder tool.",
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Communicate directly with employers through our integrated messaging system.",
    },
    {
        icon: Award,
        title: "Skill Assessments",
        description: "Take skill assessments to showcase your abilities to potential employers.",
    },
];

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access a vast pool of qualified candidates to find the perfect fit for your job openings.",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Gain insights into your job postings and applicant trends with our advanced analytics tools.",
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "Hire with confidence by accessing our database of verified and pre-screened candidates.",
    },
    {
        icon: Clock,
        title: "Efficient Hiring Process",
        description: "Streamline your hiring process with our user-friendly applicant tracking system.",
    },
];

export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard},
    { id: "post-job", name: "Post a Job", icon: Plus},
    { id: "manage-jobs", name: "Manage Jobs", icon: Breifcase},
    { id: "company-profile", name: "Company Profile", icon: Building2},
];

export const CATEGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Finance", label: "Finance" },
    { value: "Customer Service", label: "Customer Service" },
    { value: "Product" , label: "Product"},
    { value: "Human Resources", label: "Human Resources" },
    { value: "Operations", label: "Operations" },
    { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
    { value: "Remote", label: "Remote" },

];

export const SALARY_RANGES = [
    "Less than $1000",
    "$1000 - $15000",
    "More than $15000",
];
    
    
        