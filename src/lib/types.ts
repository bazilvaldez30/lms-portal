/* Const Data */
interface INavMenuData {
  name: string;
  link: string;
}
interface IAboutUsData {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
interface IAdditionalInfoData {
  title: string;
  value: string;
  icon: React.ReactNode;
}
interface IProgramsData {
  title: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}
interface ICareersData {
  title: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}

interface ISocialLoginData {
  name: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
}

interface IDashboardNavData {
  title: string;
  link: string;
  icon: React.ReactNode;
  roles: string[];
}

/* Forms */
interface ILoginForm {
  username_or_email: string;
  password: string;
}

interface SubjectData {
  key: React.Key;
  subject: string;
  firstGrading: number;
  secondGrading: number;
  thirdGrading: number;
  fourthGrading: number;
}
