import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/dt-money-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useWindowSize } from '../../hooks/useWindowSize'

export function Header() {
  const { width } = useWindowSize()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" height={width && width <= 420 ? 32 : ''} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
