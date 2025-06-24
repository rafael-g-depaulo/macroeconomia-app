import useSWR from 'swr'

export const makeDataHook = <T>(key: string, fetcher: () => Promise<T>) => {
  const { data, error } = useSWR('/managing-editor', fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
