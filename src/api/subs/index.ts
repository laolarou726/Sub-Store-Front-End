import request from '@/api';
import { AxiosPromise } from 'axios';

export function useSubsApi() {
  return {
    getSubs: (): AxiosPromise<MyAxiosRes> => {
      return request({
        url: '/api/subs',
        method: 'get',
      });
    },
    getCollections: (): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/collections`,
        method: 'get',
      });
    },
    getOne: (type: string, name: string): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/${type}/${encodeURIComponent(name)}`,
        method: 'get',
      });
    },
    downloadOne: (name: string, params?: any): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/download/${encodeURIComponent(name)}`,
        params,
        method: 'get',
      });
    },
    getFlow: (name: string): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/sub/flow/${encodeURIComponent(name)}`,
        method: 'get',
      });
    },
    getSubInfo: (data: NodeInfo): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/utils/node-info`,
        method: 'post',
        data,
      });
    },
    createSub: (
      type: string,
      data: Sub | Collection
    ): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/${type}`,
        method: 'post',
        data,
      });
    },
    editSub: (
      type: string,
      name: string,
      data: Sub | Collection
    ): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/${type}/${encodeURIComponent(name)}`,
        method: 'patch',
        data,
      });
    },
    deleteSub: (type: string, name: string): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/${type}/${encodeURIComponent(name)}`,
        method: 'delete',
      });
    },
    compareSub: (
      type: string,
      data: Sub | Collection | any
    ): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/preview/${type}`,
        method: 'post',
        data,
      });
    },
    sortSub: (
      type: string,
      data: Sub | Collection | Artifacts
    ): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/${type}`,
        method: 'put',
        data,
      });
    },
    newSortSub: (
      type: string,
      data: Sub | Collection | Artifacts
    ): AxiosPromise<MyAxiosRes> => {
      return request({
        url: `/api/sort/${type}`,
        method: 'post',
        data,
      });
    },
  };
}
