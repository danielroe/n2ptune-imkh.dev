---
title: 최소공배수와 최대공약수 알고리즘 (유클리드 호제법)
date: 2020-10-29 14:33:19
published: true
tags: ['javascript', 'algorithm']
cover_image: /images/gcd-lcm-thumbnail.jpg
description: 유클리드 호제법을 이용해서 최소공배수와 최대공약수를 쉽게 구하는 알고리즘을 구현
---

## 최대공약수와 최소공배수 구하기

최대공약수와 최소공배수는 수학의 기초 중 기초라고 할 수 있을 정도로 널리 알려진 개념이다. 노트와 펜이 있으면 아래의 사진과 같이 쉽게 구하는 방법이 있다.

![최대 공약수](/images/gcd.png)

사진과 같이 이 수로 나누면 나누어질 것 같은데? 라고 생각드는 숫자를 넣어 두 숫자를 나눠보면 나눠질 때도 있고 나누어지지 않을 때도 있다. 이렇게 해서 계속 나누다 보면 1로 밖에 나누어지지 않을 때가 나오는데, 그 때 두 수를 **서로소**라고 하며 **서로소는 최대공약수가 1인 수**다. 그리고 왼쪽에 나열했던 수를 나눴던 수는 두 수의 공약수가 된다. 나눈 수들을 전부 곱하면 그 수가 **최대공약수**가 된다.

최대공약수와 최소공배수를 알고리즘을 통해 구하고 내용을 정리한다.

## 최대공약수

최대공약수를 구하기 위해 매우 쉬운 공식이 있다. 바로 [유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)이다. 에우클레이데스라는 그리스의 수학자가 만든 호제법이란 소린데 호제법의 호는 서로 호(互)와 나누다, 덜다라는 뜻의 덜 제(除)를 써 서로 즉 두 수를 나눈다는 뜻이다.

> 2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

(이게 무슨 소리야?) 이 성질을 이용해서 위의 과정을 계속 반복해 나머지가 0이 나올 때까지 나누면 그 수가 바로 최대공약수라는 소리다.

### 계산 과정

예를 들어 두 수 648과 232을 입력받는다고 했을 때, 두 수에서 더 큰 수는 648이기 때문에 a를 648로 두고 위의 과정에 대입해서 계산해본다. 648을 232로 나눴을 때 나누어 떨어지지 않기 때문에 나머지를 구한다.

- 648 % 232 = 184, 232는 184로 나누어 떨어지지 않음 다시 나눔
- 232 % 184 = 48, 184은 48로 나누어 떨어지지 않음 다시 나눔
- 184 % 48 = 40, 48은 40으로 나누어 떨어지지 않음 다시 나눔
- 48 % 40 = 8, 40은 8로 나누어 떨어지므로 최종적으로 r은 0이 되므로 계산 종료 최대공약수는 8

### 구현

위의 과정과는 비슷하지만 조금 다르게 함수로 구현할 수 있다. 두 수를 입력으로 받고 작은 수가 0이 될때 까지 나눈다.

```js
function gcd(a, b) {
  let r
  while (b != 0) {
    r = a % b
    a = b
    b = r
  }
  return a
}
```

구현은 매우 간단하다. 나누어 떨어질 때까지 나누어서 최대공약수를 구한다. 두 수가 만약 거대하고 최대공약수가 반드시 1인 두 수라면 시간이 걸릴진 몰라도 빠르게 최대공약수를 구할 수 있다.

## 최소공배수

최소공배수보다 최대공약수를 먼저 서술한건 최소공배수의 성질을 이용해 쉽게 구할 수 있기 때문이다. 비교적 적은 최소공배수의 성질 중에 이런 성질이 있다. 두 수 **a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다**. 이 성질을 이용해서 위의 최대공약수를 구하는 함수와 함께 최소공배수를 쉽게 구할 수 있다.

### 구현

```js
function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

function gcd(a, b) {
  let r
  while (b != 0) {
    r = a % b
    a = b
    b = r
  }
  return a
}
```

기존 코드에서 단 3줄만 추가하면 최대공약수를 이용해서 최소공배수를 구할 수 있다.