import { css } from 'styled-components';
import { theme } from '../styles';

const { colors } = theme;

const mixins = {
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  spaceAround: css`
    display: flex;
    justify-content: space-around;
  `,
  spaceBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  bottomShadow: css`
    box-shadow: 0px 2px 3px 2px ${colors.rgbaBlack01};
    -webkit-box-shadow: 0px 2px 3px 2px ${colors.rgbaBlack01};
    -moz-box-shadow: 0px 2px 3px 2px ${colors.rgbaBlack01};
  `,
  lineShadow: css`
    box-shadow: 0px 1px 1px 0px ${colors.rgbaBlack01};
    -webkit-box-shadow: 0px 1px 1px 0px ${colors.rgbaBlack01};
    -moz-box-shadow: 0px 1px 1px 0px ${colors.rgbaBlack01};
  `,
  SmallShadow: css`
    box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 10%), 0px 0px 15px 0 rgb(0 0 0 / 10%);
    -webkit-box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 10%), 0px 0px 15px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 10%), 0px 0px 15px 0 rgb(0 0 0 / 10%);
  `,
  blueButton: css`
    background: linear-gradient(to right, ${colors.blue}, ${colors.red});
    color: ${colors.white};
    padding: 15px 40px;
    font-size: 1.1em;
    font-weight: bold;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
    svg {
      margin-left: 10px;
      font-size: 1.4em;
    }
    &:hover {
      background: linear-gradient(to right, ${colors.red}, ${colors.blue});
      svg {
        transition: transform 0.2s ease-in-out;
        transform: translateX(10px);
      }
    }
  `,
};
export default mixins;
