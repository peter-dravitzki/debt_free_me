import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getEditInfo } from '../apis/info'

export function useEditInfo() {
  const query = useQuery({ queryKey: ['info'], queryFn: getEditInfo })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}
export function useInfoMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['info'] })
    },
  })

  return mutation
}
