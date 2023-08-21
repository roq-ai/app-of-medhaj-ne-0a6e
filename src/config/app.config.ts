interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Contributor'],
  customerRoles: ['Guest'],
  tenantRoles: ['Contributor'],
  tenantName: 'Client',
  applicationName: 'app of medhaj news',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
