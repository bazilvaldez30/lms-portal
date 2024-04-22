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

/* Forms */
interface ILoginForm {
  username_or_email: string;
  password: string;
}

/* Props */
