import { rest } from 'msw';

export const handlers = [
  rest.post('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: '내정보 입력 성공',
        data: {
          myId: 1,
        },
      }),
    );
  }),
  rest.post('/user/match', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: '상대방 정보 입력 성공',
        data: {
          fromId: 1,
          toId: 3,
        },
      }),
    );
  }),
  rest.post('/evaluation', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: '평가 입력 성공',
      }),
    );
  }),
];
