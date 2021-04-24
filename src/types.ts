export enum AuthReducerActionType {
  'LOGIN_REQUEST' = 'LOGIN_REQUEST',
  'LOGIN_SUCCESS' = 'LOGIN_SUCCESS',
  'LOGIN_FAIL' = 'LOGIN_FAIL',
  'ASYNC_LOGIN_SUCCESS' = 'ASYNC_LOGIN_SUCCESS',

  'SIGNUP_SUCCESS' = 'SIGNUP_SUCCESS',

  'TRIGGER_SIGNOUT' = 'TRIGGER_SIGNOUT',

  'LOGGED_USER_INFO' = 'LOGGED_USER_INFO',
}

export interface AuthState {
  loading: boolean;
  token?: string;
  userInfo?: UserInfo;
}

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface AuthReducerAction {
  type: AuthReducerActionType;
  data: Partial<AuthState>;
}

/*
 * PRODUCTS
 */

export enum ProductReducerActionType {
  'ADD_PRODS' = 'ADD_PRODS',
  'REMOVE_PROD' = 'REMOVE_PROD',

  'RESET' = 'RESET',
}

export interface Product {
  id: string;
  title: string;
  available: boolean;
  description: string;
  guisos: string[];
  maxGuisos: number;
  minGuisos: number;
  price: number;
}

export interface ProductState {
  page: number;
  count: number;
  items: Product[];
}

export interface ProductReducerAction {
  type: ProductReducerActionType;
  data: ProductState;
}

// Guisos

export enum GuisoReducerActionType {
  'ADD_GUISOS' = 'ADD_GUISOS',
  'REMOVE_GUISOS' = 'REMOVE_GUISOS',

  'RESET' = 'RESET',
}

export interface Guiso {
  id: string;
  title: string;
  description: string;
  available: boolean;
}

export interface GuisoState {
  page: number;
  count: number;
  items: Guiso[];
}

export interface GuisoReducerAction {
  type: GuisoReducerActionType;
  data: Guiso[] | Guiso;
}

/*
 * Order state
 */

export interface OrderState {
  page: number;
  orders: Order[];
  count: number;
}

export interface Order {
  id: string;
  status: string;
  total: number;
  description: string;
  items: string[];
  createdAt: string;
  groups: string[];
}

export interface OrderItem {
  id: string;
  count: number;
  itemId: string;
  groupId: string;
  guisos: string;
  details: string;
}

export enum OrderActionTypeWithoutData {
  'ORDER_REQUEST' = 'ORDER_REQUEST',
  'ORDER_SUCESS' = 'ORDER_SUCCESS',
  'RESET_ORDERS' = 'RESET_ORDERS',
}

export enum OrderActionTypeSingle {
  'ORDER_CREATED' = 'ORDER_CREATED',
  'ORDER_UPDATED' = 'ORDER_UPDATED',
  'ORDER_DELETED' = 'ORDER_DELETED',
}

export enum OrderActionTypeMany {
  'GET_ORDERS' = 'GET_ORDERS',
  'REMOVE_ORDERS' = 'REMOVES',
}

export type OrderActionType =
  | OrderActionTypeSingle
  | OrderActionTypeWithoutData
  | OrderActionTypeMany;

export interface OrderReducerActionWithoutData {
  type: OrderActionTypeWithoutData;
}

export interface OrderReducerActionWithData {
  type: OrderActionTypeSingle;
  data: Order;
}

export interface OrderReducerActionMany {
  type: OrderActionTypeMany;
  data: Order[];
}

export type OrderReducerAction =
  | OrderReducerActionWithData
  | OrderReducerActionWithoutData
  | OrderReducerActionMany;

// Redux state type definitions

export interface AppCombinedState {
  auth: AuthState;
  product: ProductState;
  order: OrderState;
}

export type ReducersCombinedActions = AuthReducerAction &
  OrderReducerAction &
  ProductReducerAction;

//
// =============================== Router types ======================================== //

// A helper type to enable us to strongly type nested
// screens.
export type ScreenType<ParamList, ParamListKey extends keyof ParamList> = {
  screen: ParamListKey;

  // This could be made to be optional, however we lose the type safety
  // on screens that do indeed have params. So we are keeping this required
  // but it is nullable so you can just set it to undefined
  params: ParamList[ParamListKey];
};

export type ParamScreens<ScreenParamList, OwnParams = {}> = {
  [T in keyof ScreenParamList]: ScreenType<ScreenParamList, T> & OwnParams;
};

/**
 * This function takes your params list for your stack / tab
 * navigatior, and converts it so that you can use it to
 * strongly type nested screen paramaters.
 */
export type ConvertParamsIntoScreenTypes<
  ScreenParamList, // Param list as per https://reactnavigation.org/docs/typescript/#type-checking-the-navigator
  OwnParams = {} // Any extra params that this route should include
> = ParamScreens<
  ScreenParamList,
  OwnParams
>[keyof ParamScreens<ScreenParamList>];

export type MainRouterParamList = {
  BottomTab: {};
  ProductStack: ConvertParamsIntoScreenTypes<ProductStackParamList>;
  ProfileStack: {};
  CheckoutStack: {};
};

export type ProductStackParamList = {
  Product: {id: string};
  guisoDetail: {id: string};
};

export type AuthStackParamList = {
  Login: {
    email?: string;
    password?: string;
  };
  SignUp: {
    email?: string;
  };
};

export type OrderStackParamList = {
  OrderHome: {};
  OrderDetails: {
    order: Order;
  };
};

export type BottomTabParamList = {
  Profucts: {};
  Profile: {};
  Orders: ConvertParamsIntoScreenTypes<OrderStackParamList>;
};
