import { Styles } from 'react-jss';

// 型補完をいい感じにするための便利メソッド
export const createStyles = <
  TStyleKey extends string | number | symbol,
  TProps = {}
>(
  s: Styles<TStyleKey, TProps>
) => s;
