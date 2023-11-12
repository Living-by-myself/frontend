import styled from "styled-components";

export const Checkbox = styled.input`
  &[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    flex-shrink: 0;
    background-color: #fff;
    border-color: #6b7280;
    border-width: 1px;
    --tw-shadow: 0 0 #0000;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.2rem;
    border: ${({ theme }) => `1px solid ${theme.colors.gray[300]}`};
    color: ${({ theme }) => theme.colors.green[300]};
  }

  &[type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &[type="checkbox"]:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: ${({ theme }) =>
      `0 0 0 2px #fff, 0 0 0 calc(2px + 2px ) ${theme.colors.green[300]}`};
  }
`;
