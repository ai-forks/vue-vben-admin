import { defHttp } from "/@/utils/http/axios";
import { GetAccountInfoModel } from "./model/accountModel";

enum Api {
  ACCOUNT_INFO = "/account/getAccountInfo",
  SESSION_TIMEOUT = "/user/sessionTimeout",
  TOKEN_EXPIRED = "/user/tokenExpired",
}

// Get personal center-basic settings

export const accountInfoApi = () => defHttp.get<GetAccountInfoModel>({ url: Api.ACCOUNT_INFO });

export const sessionTimeoutApi = () => defHttp.post<void>({ url: Api.SESSION_TIMEOUT });

export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED });
