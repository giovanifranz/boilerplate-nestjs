import { Either, left, right } from '@/core/either';

function doSomeThing(shouldSuccess: boolean): Either<string, number> {
  if (!shouldSuccess) {
    return left('error');
  }

  return right(10);
}

test('success result', () => {
  const result = doSomeThing(true);

  expect(result.isRight()).toBeTruthy();
  expect(result.isLeft()).toBeFalsy();
});

test('error result', () => {
  const result = doSomeThing(false);

  expect(result.isLeft()).toBeTruthy();
  expect(result.isRight()).toBeFalsy();
});
