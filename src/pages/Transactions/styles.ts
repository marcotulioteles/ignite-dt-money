import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tr {
    @media (max-width: 790px) {
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: ${(props) => props.theme['gray-700']};
      padding: 20px;
      margin-bottom: 0.75rem;
      border-radius: 6px;
    }

    td {
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme['gray-700']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      @media (max-width: 790px) {
        padding: 0;
        width: 100%;
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  @media (max-width: 790px) {
    font-size: 20px;
    font-weight: 700;
  }

  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const CategoryAndPriceGroup = styled.td`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['gray-700']};

  @media (max-width: 720px) {
    color: ${(props) => props.theme['gray-500']};
  }
`
