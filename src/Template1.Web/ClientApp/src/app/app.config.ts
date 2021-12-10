import { BQConfigData, ViewType } from "bq-start-prime";
import { RoleForm, RoleList } from "./adminUI/roles/roles";
import { UserForm, UserList } from "./adminUI/users/users";


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
        { label: "Roles", viewId: "roles", icon: "pi-users", childMenus: [] },
        { label: "Users", viewId: "users", icon: "pi-users", childMenus: [] },
      ]
    }
  ],
  views: [
    {
      viewId: "roles",
      typeName: "IdentityRole",
      title: "Roles",
      viewType: ViewType.List,
      component: RoleList
    },
    {
      viewId: "role",
      typeName: "IdentityRole",
      title: "Role",
      viewType: ViewType.Form,
      component: RoleForm
    },
    {
      viewId: "users",
      typeName: "ApplicationUser",
      title: "Users",
      viewType: ViewType.List,
      component: UserList
    },
    {
      viewId: "user",
      typeName: "ApplicationUser",
      title: "User",
      viewType: ViewType.Form,
      component: UserForm
    },
  ]
}
