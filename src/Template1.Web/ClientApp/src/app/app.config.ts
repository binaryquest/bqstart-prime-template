import { BQConfigData, ViewType } from "bq-start-prime";


export const APP_CONFIG: BQConfigData = {
  applicationName: 'Template1',
  logoUrl: 'assets/images/logo.png',
  companyName: 'Binary Quest',
  viewDefaults: { defaultPageSize: 50, otherPageSizes: [25, 50, 100] },
  menus: [
    {
      label: "Home", icon: "",
      childMenus: [
        //example of a menu link to a general component route path
        { label: "Counter", path: "/counter", icon: "", childMenus: [] }
      ]
    },

    {
      label: "Example Menu", icon: "",
      childMenus: [

      ]
    },
    {
      label: "Setup", icon: "", allowedRoles: ["Admin"], childMenus: [

      ]
    }
  ],
  views: [

  ]
}
