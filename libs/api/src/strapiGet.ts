import { AxiosInstance, AxiosResponse } from 'axios'

type UseAttributesIfExists<T> = T extends { attributes: infer T_ }
  ? T_ & { id: string }
  : T extends any
    ? T
    : never

type StrapiSingleType<T> =
  unknown extends UseAttributesIfExists<T> ? never : UseAttributesIfExists<T>

type RemoveUnkown<T> = T extends never[]
  ? never
  : T extends (infer _T)[]
    ? RemoveUnkown<_T>[]
    : unknown extends T
      ? never
      : T

export const strapiGet =
  <T>(key: string) =>
  (strapiInstance: AxiosInstance) =>
  () =>
    strapiInstance
      .get<
        T extends { values: infer T_ }[]
          ? AxiosResponse<RemoveUnkown<StrapiSingleType<T_>[]>>
          : AxiosResponse<RemoveUnkown<StrapiSingleType<T>>>
      >(key)
      .then(({ data }) => data.data)
