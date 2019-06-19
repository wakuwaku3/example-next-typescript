import * as React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { createStyles } from 'src/common/helper';
import Link from 'next/link';

const styles = createStyles({
  body: {
    color: 'red'
  }
});

const Page: React.FunctionComponent<WithSheet<keyof typeof styles>> = props => {
  const { classes, ...others } = props;
  const { body } = classes;
  return (
    <div {...others} className={body}>
      Welcome to next.ts!
      <Link href="/contacts">
        <a>contacts</a>
      </Link>
    </div>
  );
};
const StyledPage = injectSheet(styles)(Page);
export default StyledPage;
