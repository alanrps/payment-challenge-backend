export interface CreateCustomerResponseDto {
  object: string;
  id: string;
  dateCreated: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  complement?: string;
  province: string;
  postalCode: string;
  cpfCnpj: string;
  personType: string;
  deleted: boolean;
  additionalEmails?: string | null;
  externalReference?: string | null;
  notificationDisabled: boolean;
  observations?: string | null;
  municipalInscription?: string | null;
  stateInscription?: string | null;
  canDelete: boolean;
  cannotBeDeletedReason?: string | null;
  canEdit: boolean;
  cannotEditReason?: string | null;
  city: number;
  cityName: string;
  state: string;
  country: string;
}
