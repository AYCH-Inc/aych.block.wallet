import { Box } from 'components/Box'
import {
  Button,
  Icon,
  Link,
  SkeletonRectangle,
  Text
} from 'blockchain-info-components'
import { FormattedMessage } from 'react-intl'
import { Props, State } from '..'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CustomBox = styled(Box)`
  background-image: url('/img/buy-sell-learn-more.png');
  /* stylelint-disable */
  background-image: -webkit-image-set(
    url('/img/buy-sell-learn-more.png') 1x,
    url('/img/buy-sell-learn-more@2x.png') 2x
  );
  /* stylelint-enable */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

class BorrowPax extends PureComponent<Props & State> {
  render () {
    return (
      <CustomBox>
        <div>
          <Icon name='borrow' color='blue600' size='32px' />
          <Text
            size='20px'
            color='grey800'
            weight={600}
            style={{ marginTop: '16px' }}
          >
            <FormattedMessage
              id='scenes.borrow.borrowusdd'
              defaultMessage='Borrow USD Digital Today'
            />
          </Text>
          <Text
            size='14px'
            color='grey600'
            weight={500}
            style={{ marginTop: '4px', lineHeight: 1.5 }}
          >
            <FormattedMessage
              id='scenes.borrow.getusddigital'
              defaultMessage='Get USD Digital directly from your Blockchain Wallet, use your bitcoin as collateral. You need to be Gold level to benefit from this new offering.'
            />
          </Text>
        </div>
        {this.props.isDisabled ? (
          this.props.userDataR.cata({
            Success: val => (
              <Button
                nature='primary'
                data-e2e='verifyIdentityBorrow'
                disabled={val.kycState !== 'NONE'}
                onClick={() =>
                  this.props.identityVerificationActions.verifyIdentity(2)
                }
              >
                {val.kycState === 'UNDER_REVIEW' ? (
                  <FormattedMessage
                    id='scenes.borrow.kycunderreview'
                    defaultMessage='Gold Verification In Review'
                  />
                ) : (
                  <FormattedMessage
                    id='scenes.borrow.verifyid'
                    defaultMessage='Upgrade Now'
                  />
                )}
              </Button>
            ),
            Failure: () => (
              <Link
                style={{ width: '100%' }}
                target='_blank'
                href='https://support.blockchain.com/'
              >
                <Button fullwidth nature='primary' data-e2e='contactSupport'>
                  <FormattedMessage
                    id='scenes.borrow.support'
                    defaultMessage='Contact Support'
                  />
                </Button>
              </Link>
            ),
            Loading: () => <SkeletonRectangle width='100%' height='40px' />,
            NotAsked: () => <SkeletonRectangle width='100%' height='40px' />
          })
        ) : (
          <Link
            style={{ width: '100%' }}
            target='_blank'
            href='https://support.blockchain.com/hc/en-us/articles/360040444691'
          >
            <Button
              style={{ marginTop: '16px' }}
              nature='light'
              fullwidth
              data-e2e='paxLearnMore'
            >
              <FormattedMessage
                id='scenes.borrow.learnmore'
                defaultMessage='Learn More'
              />
            </Button>
          </Link>
        )}
      </CustomBox>
    )
  }
}

export default BorrowPax
