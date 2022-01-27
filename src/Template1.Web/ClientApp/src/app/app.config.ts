import { BQConfigData, ViewType } from "bq-start-prime";
import { RoleForm, RoleList } from "./adminUI/roles/roles";
import { UserForm, UserList } from "./adminUI/users/users";
import { DemoCustomerFormComponent } from "./demo/demo-customer-form";
import { DemoCustomerListComponent } from "./demo/demo-customer-list";


export const APP_CONFIG: BQConfigData = {
  applicationName: 'Template1',
  logoUrl: 'assets/images/logo.png',
  companyName: 'Binary Quest',
  viewDefaults: { defaultPageSize: 50, otherPageSizes: [25, 50, 100] },
  tabbedUserInterface: false,
  menus: [
    {
      label: "Home", icon: "",
      childMenus: [
        //example of a menu link to a general component route path
        { label: "Counter", path: "/counter", icon: "", childMenus: [] }
      ]
    },
    {
      label: "Demo", icon: "pi pi-users", childMenus: [
        {label: "Demo Customers", icon: "pi pi-users", viewId:"democustomer", childMenus:[]}
      ]
    },
    {
      label: "Setup", icon: "", allowedRoles: ["Admin"], childMenus: [
        { label: "Roles", viewId: "roles", icon: "pi pi-users", childMenus: [] },
        { label: "Users", viewId: "users", icon: "pi pi-users", childMenus: [] },
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
    {
      viewId: "democustomer",
      typeName: "DemoCustomer",
      title: "DemoCustomer",
      viewType: ViewType.List,
      component: DemoCustomerListComponent,
      hideBreadCrumb: false
    },
    {
      viewId: "democustomer-form",
      typeName: "DemoCustomer",
      title: "Demo Customer",
      viewType: ViewType.Form,
      component: DemoCustomerFormComponent
    }
  ]
}
