import * as React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { createStyles } from 'src/common/helper';
import Link from 'next/link';
import { withAmp } from 'next/amp';
import { Meta } from 'src/components/atoms/meta';
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
      <Meta title="example-site" description="this is example." />
      Welcome to next.ts!
      <Link href="/contacts">
        <a>contacts</a>
      </Link>
    </div>
  );
};
const StyledPage = injectSheet(styles)(Page);
export default withAmp(StyledPage, { hybrid: true });
