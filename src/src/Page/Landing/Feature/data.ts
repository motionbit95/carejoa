import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

export const services = [
  {
    name: '요양병원',
    description: '병원수준의 의료 서비스 제공',
    icon: BsStars,
  },
  {
    name: '요양원',
    description:
      '일상적인 돌봄과 지원',
    icon: IoRocketSharp,
  },
  {
    name: '주야간보호',
    description: '일상적인 돌봄 서비스 제공',
    icon: BsFillMoonFill,
  },
  {
    name: '방문시설',
    description:
      "일시적인 돌봄 제공",
    icon: FaPaintBrush,
  },
]
