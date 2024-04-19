import { usePathname } from 'next/navigation'

export const useGetPathName = () => {
  const url = usePathname()

  return { url }
}
