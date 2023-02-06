import { service, source} from '../rpc/index'

export const test = (url: string, data: any) => {
  return service({
    url: url,
    data: data,
    method: 'POST',
    cancelToken: source.token
  })
}