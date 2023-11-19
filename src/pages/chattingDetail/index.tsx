import { MobileContainer } from "@/styles/commonStyles";
import { ChatFormData } from "@/types/form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

const Dummy = [
  {
    userId: 1,
    id: 1,
    nickname: "내매세지",
    content: "안녕하세요 내매세지입니다.",
    getCreatedAtAsString: "2023-11-08 14:56:26",
  },
  {
    userId: 2,
    id: 2,
    nickname: "상대매세지1",
    content: "안녕하세요",
    getCreatedAtAsString: "2023-11-08 14:58:26",
  },
  {
    userId: 2,
    id: 2,
    nickname: "상대매세지1",
    content: "안녕하세요",
    getCreatedAtAsString: "2023-11-08 14:58:26",
  },
  {
    userId: 3,
    id: 3,
    nickname: "상대매세지2",
    content: "안녕하세요",
    getCreatedAtAsString: "2023-11-08 14:59:26",
  },
];

const schema = z.object({
  message: z
    .string()
    .min(1, { message: "1자 이상 입력하세요." })
    .max(1000, { message: "1000자 이내로 입력하세요." }),
});

const ChattingDetailPage = () => {
  const userId = 1;

  const { register, handleSubmit } = useForm<ChatFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <MobileContainer>
      <S.Container>
        헤더변경필요
        {/*채팅 관련 하나의 컴포넌트로 내부에서 또다시 map을 돌려야함 한 줄에 유저가 나냐 아니냐로 구분해서 */}
        <S.Inner>
          {Dummy.map((message) => {
            return (
              <S.MessageWrapper>
                {message.userId !== userId && (
                  <S.Nickname>{message.nickname}</S.Nickname>
                )}
                <S.MessageBox $isMine={message.userId === userId}>
                  <S.MessageContent $isMine={message.userId === userId}>
                    <S.Message>{message.content}</S.Message>
                  </S.MessageContent>
                  <S.Time>{message.getCreatedAtAsString.slice(-8, -3)}</S.Time>
                </S.MessageBox>
              </S.MessageWrapper>
            );
          })}
        </S.Inner>
        <S.MessageInputBox>
          <S.MessageInput
            {...register("message")}
            placeholder="메세지를 작성하시오."
            id="chatMessage"
          />
          <S.MessageInputButton
            type="submit"
            onClick={handleSubmit((data) => {
              console.log(data);
            })}
          >
            전송
          </S.MessageInputButton>
        </S.MessageInputBox>
      </S.Container>
      {/* 메세지 보내는 훅 */}
    </MobileContainer>
  );
};

export default ChattingDetailPage;

interface IMessageBox {
  $isMine: boolean;
}

const S = {
  MessageInputButton: styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border: none;
    outline: none;
  `,
  MessageInputBox: styled.form`
    width: 100%;
    margin-top: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
    padding: 15px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
  `,
  MessageInput: styled.input`
    padding: 13px;
    min-height: 40px;
    min-width: 80%;

    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 50px;
  `,
  Container: styled.div`
    padding-top: 9px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 56px);

    overflow: hidden;
  `,
  Inner: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  `,
  MessageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  MessageBox: styled.div<IMessageBox>`
    width: 100%;
    display: flex;
    justify-content: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
    align-items: flex-end;
    gap: 10px;
  `,
  MessageContent: styled.div<IMessageBox>`
    padding: 10px;
    background-color: ${({ $isMine, theme }) =>
      $isMine ? theme.colors.green[400] : theme.colors.gray[200]};
    border-radius: 10px;
    max-width: 70%;
    word-wrap: break-word;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ $isMine, theme }) =>
      $isMine ? theme.colors.gray[0] : theme.colors.gray[800]};
  `,
  Time: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray[400]};
  `,
  Message: styled.p``,
  Nickname: styled.p``,
};
