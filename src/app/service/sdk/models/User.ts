/* tslint:disable */

declare var Object: any;
export interface UserInterface {
  "id": string;
  "username": string;
  "Dept_ID"?: string;
  "Site_ID": string;
  "Active": boolean;
  "isAD": boolean;
  "realm"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
}

export class User implements UserInterface {
  "id": string;
  "username": string;
  "Dept_ID": string;
  "Site_ID": string;
  "Active": boolean;
  "isAD": boolean;
  "realm": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'User',
      plural: 'Users',
      path: 'Users',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "Dept_ID": {
          name: 'Dept_ID',
          type: 'string'
        },
        "Site_ID": {
          name: 'Site_ID',
          type: 'string'
        },
        "Active": {
          name: 'Active',
          type: 'boolean'
        },
        "isAD": {
          name: 'isAD',
          type: 'boolean'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
