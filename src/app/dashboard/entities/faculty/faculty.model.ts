export interface DialogData {
    class?: string, // "?" it specify that not required field
    subject?: string,
    iss_date: Date, // Issue date
    sub_date: Date, // submission date
    title: string,
    description: string
}

export interface subjectData {
    name: string,
    tasks: DialogData[]
}

export interface classData {
    name: string,
    subjects: subjectData[]
}

export interface Student {
    studentname: String
}

export interface Attatchment {
    id: string
}

export interface LeaveNote {
    id: string,
    class: string,
    studentName: string,
    subject: string,
    description: string,
    leaveFrom: string,
    leaveTo: string,
    attatchments: Attatchment[],
    status: string
}

export interface StudentResultData {
    id: string;
    name: string;
    date: string,
    subject: string;
    obt_marks: number; // obtain marks from total marks
    ttl_marks: number; // totla marks
}

export interface StudentExamData {
    title: string;
    description: string;
    exmdate: string;
    class: string;
    subject: string;
    ttl_marks: number; // totla marks
    passing_mark: number;
}

export interface FileData {
    id?: string;
    name: string;
    subject: string;
    class: string;
    uploadDate: Date; // obtain marks from total marks
    ownerName?: string; // totla marks
    fileSoureceUrl: string
  }