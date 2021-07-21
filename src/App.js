import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import Cake from './Components/Cake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Loader from 'react-loader-spinner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagenotfound from './Components/Pagenotfound';
import Home from './Components/Home';


let cake = {
  name:"Chocolate Truffle",
  price:500,
  image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgYHBgcHBwaGBgdGhoYGBgaGRoYGBgcIS4lHB4rHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQsISs0MTQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEAQAAEDAgQEAwYDBgUEAwEAAAEAAhEDIQQSMUEFUWFxIoGRBhMyobHwQlLBFGJygtHhBxUzsvEjkqLCQ1OTFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgIBBQEBAQAAAAAAAAABAhEhMQMSQQQTIlFhgTIj/9oADAMBAAIRAxEAPwDzCE+VShPCAIZUsqnCUIArhRLVdCYtQABUZBsrqeNeLfNWvYqXUJNhKYFzcU9tyJHRGOrtIB1BQlHAubdxgbjX/hV1X5jlY3+yYi58AyzzCm11pCqZSDBHqU4pOdcGBzTAk6oU3v0Lii5uhlXYajuTdIC9j+alVdLT0ur2Uw0WuVc2kHMuLEIAx2Vzsk6s/bL6ItnDnAxYDYzqmfgSSIMjcoAroYh/4gPRFMxxGrJHMH9Cq8QcoytMdY5KuiXQJFzuND5bIAuq1qbxIMHkbFAOcQbOEKyrTkaXQtFkm6BlzmU+ZJ6KmpSi40RRyjuptplxiInmlQGdCUIo0WczN9xaOioeyCQUgIQlCeEoQBGElJJAGpCeFKEkARhKFJJAECouKIpUS8wFB+Ddnyk23KdANh8OX3mBz59kS9zWCGjz3Vvu8o10USAmkIAqlzha3UpqDMoytEn6op1MvOVuvyHUrQw+EDBA13O5TQGc3AuN3kRy591dUZAhEVweag2hu5BJjY2jOiqw9cgGRoPVbeJLWjTyAWcKTnnSx2SY0DUuJPzCLzq0gR2HJbeFpuDM2QxHPZRwnD4Mhot0C1nYhlMeM3P4dT3TGZFSuBfI6RcaarIr497nQfDGwWvjuIZpDRlHzWJ+xue6WjzJSAtfQHxEmN42n9EXSouEOY6QBDd9VHDsLXhhgkiTGnVRxpNOC3Uk22iEwHpPfYFpsZmNUzngmMoMumRtzBSpcRDhDwR1H9lNlVjSSCfTdKxlzMKG+KA2511IWfUxVxF8swrK2Je8eI26fqh/dpWAO6oSZI3laVZ7HtzwRz0QhYnDEgIEDYz5KOVWhiUIArypKyEkAdEzBM3JPoFazDMH4R5yVDPCf3wVUIvdhmfkH32UG8OYTMEfzKIrqP7SmAQcrAWtAH3zWRWrFplG+J3Qcz+g1UmMa3QZjzI+gQAOxhcJ0B3P6BPQwud2Rl/zOOjR259ERTwr6p3Dd3H9At3DYdlNuVo/qTzKVADUsG1jcrR3O56kqirTA6rQeJ1sPkqXFp0v8gqFRmGmZVWIflH733dGVqLzpA7D+qy8RhXgkm6QwRrczr35o7DESt72V9jn4pvvM4DG1Ayo0fGGEA52zY6x5EovE+xD6RxTxUAp4f4HPF3y1rw3w6GHATz2SsZhVsUKbf3joP1Kxy4vJiTO6Pbw4vMvJdPoiWhjLCCeQ1/smIz6fD/+Sh8ZiBTBDPE7nsP6rRqPc/SwVFThzXauIPSEAY3CnE1C4mTBueZhE8VBzgdPqjcNw4UyTmB7oHHPDnmNBb0UsYG1isa1TaxEYbDOecrYJ6kD6pDSbwgfIolq3qPAi4F2drWtEvdqB0aNysio0AkAyJMHmOaByhKOwfKllVkJEIJKoTEK0hMWoAqhJWZUkAG06736Mce7YHqUQyg86sA7uH6LUFAnVwhXMoNG6sRmjBnd3oJVrKGW8Hudf7Ip7mDn99lAvHL1JQBU7kBmcdgi8PhALvI6NGnnzVPvms3DZ++5UXY5v4RJ62CANYE9gPvyVD8U0fD4jz2/usl+LJ+I29ApMxPISlYUGuc51yZ7/psna9Z2IxhGuVvc/oFm1eJnZzndhlH9UrQ0mzpHYgDUgJ2YpjjAuegP1WNwvDPe5pcQ1rjpq8jnJs0W79Fv1+Ghjg+k4OYHCRPiZmcGl37zRmcc22QDqsp8yWFs34/Tyll6Ow9m/aAUWvw+KLKLQ0mnUuC9kmG5ohzovGt4gwStivxTDBrC+rTyOaXj3jm5TBHicJNxbXnZeVP4sz3RD/EHsaA3XRrmmORDmuvtnbtM4wD3guqOhslxGgkxt5BYq5NSe0aT4ox0zR4nxl+Iqvc0NaHEnwNhv8s30QOHczQOHqLoCvxGJbTED82/kFnwuhSfkwlFeDrmPmwunrkNEkwuSY4t0JHYkfRWnFPOri7vdV2J6mhicSX2bZvzKH93CizGDdvoiqVVj9D5GxSsXVggcS4NA1IHqYW/Uc2mHOY0ZmuIgRpYR8pWY7DtOytL3QBms0ADTQOm/PcJpo34Jxi3Zo42oHMJzZS8NLhfL6baD0WDKLrkvNz2GwEzHVUFiLFzTU5WitNCsypoQYlZCaFNMUARypkT+yv/ACO9EyQ6YdU4gwWzsPc39Qhv85A2nsT+oRw4SwfC1vpf1UHcOOwafJaEFVLiWbRjvNwVT3VXEy7KNssH5lFjCvH4fRWsw7vxEDvEoAzHcNeb+8k9RdV/sNaYzkj93+wW6xrBqZKH4hxT3YysAzHzjqUngayAe5bSEvm+ma7j2lUV+JvdZngHz9dkG95e6XEucdzqj+H4EOh7/gMxeMxbqJ5ASSdgCspTNYwt0C4bCvqTlaXRGY8pMAuPddTwLCUaZOZgqZhlJcB4g6GnK3YeNnU5mmUZw+s2mHANaGuBzNyDKGDIXgtIvDHtJnrN5UOMVmUmNqsaQS9geybNcyp7xwaNQS6xuRGWLELmc3J0jsjxRirY+LwjaUVmumnmaTPxAAl0zoWlwY0aQJ5mcxnFjlDaYzPc1gc4/CJYA8dfGM38zuaHq4p72ZXEU6QiROobIbJ/hytga5GrKxGPtlp+FvPc9uSqPHj5Ez5afxL3PZREfG/ly7nZZ+IxDnmXG2w2Hkq0ltRztiSSSTJEkkkgYySSSACsNjXNs64+YWmxwcJBkLCVuGxBYem4QmTRskKpwVrHhwBGhUXBUiWVFVuVrgqXhAitzlfw/Dms8MYHOJ1ytkgfT1QVVy0vZOu9lVzmOykCCCJBaTc9CNU9lQj2kkdh/llf87//AMmpKX/9DS/O30akr6o9H2Y/ZyjcZyI9VY3FH8y5cvdMBWU6bzoT5JWeWdKcUTqVFtUEwJJ6LLpcPi9R5j8oJlFurhjSGANEGOfcoAuq4gNBuLdRKzsPgalZxcBafETAAnmTp216IejhqmQvDXEEHxbWO0635cl02EaBlpi0FrWjbO8annDZe7yG5WHJKtG/DC9hLOAtZTY9jG1CGw8RN8x8eUnxDbpE2mQbg8eMmUta9rnAEFgM+EPAa07lpJjpCqw+OLMrxZuT3mtzTNd7HR1ALHD+E81ncUxRdWqOpvDaZcx5fpD2Ny5mHkefVc1Sk2mdtxgk0XcarinUaKQa4OZUlskx7743Hcg2gbXGyxsTiQ2DUcXvAEN2ENDQTys1o52CGrY6JFO06uPxHtOncoCFvGCSOafI5MniK7nmXHsBoOwVcKUJKzMZNCkmQA0JJ0yBCTJ0kANCSdPCBkYTEKaaEBQZw55u3b+qOzfe3qtn/DLDh+JeHNDmmi8ODgCCC9moK6H2m9iwGuqYa8XNKRP8hP8AtPkdlNyWUDUdPZwpaq3MVjagdzB0IIMyOicrSMkzOUXF5BX4eVWKL2SWGCRHkUaU7U7Ethn+cD/6P9qSGST7M392X2A/s7VaxwGlllPxB5qH7QeqdnMbD3jUmPqt/wBmPZs4girUY73P4WyAahGh5hn17LO9k+CDEPz1D/06YDn9SbtYBrsSeg6hen0sYwWaHW5MdECBAgbTp0UuVlVRzHtTSaKlOmWhrH0nNDRYDI7QR0ftyXGuxr6NSDcsz5SRrnEZ/Rdb7b1G1mNqMcW1KLnW/ddALXcjmDbd1y9RzcSwRDajdJ35ieX0WTSkawbiAYvHPe1jZIFNpaItYuzXVGIxL3xmNhoBYd45qpzS0lrgQRqCmBQlQ5Sb2JOmlJMQ6ZJJACSSTJgJJJMkA6SSUoASSSZA6FKsoUy4jlubmOphXcPwD6zwxgknXkBzJ5Lq6gZg2FjDNV2ro06nl0HWUmyoqzX/AMOME1tes2WvhjYcLgguvHmB6L0ZrWgwIB5W0Xm3s0+nh2GpUa4mqWtYGOILvC6JI0tnPcN3heh/5dTN8pvE+J084N+p9SiEvBHLF3fg5b2z9lRW/wCvRtVbdzR/8gA+TwNDvodiPNvegmIg8iveW0w0Q0Aduq8v/wAROAZKgrsGVlQnMBoKmun7wk9w7mql8comL7YZy5SBTjCvYzM7Qm2txGonZVyqTUlaJlFxdMnKSrlJMRgsYi8PR1PL6qhq0qFEl7aZNi5jSNjmcAfqUpPARVs9M9mcMzDYdjC4B7hnfcSXvBcZ7AR/ItXG44MpveHtaQDBcCW5tgQIknSJVoFzFroDj+FFWi5mYhzfG0CC4ls2g6zJHmk8II5kee4Cg/3hNR5cagcP5iQ6Y0nNdYeIoupuOoLXEW2jSPJadZ72vBJHhcCLXixI8v1UuNUcwNQbkSBpaRKlNPRq01sDOOY8BtZtxo9vxDuqamCJk03Co3934h/E3X0QjwoscWkEEgjcKhEpPolmRf8Amrnf6jGPj8wh3k4XQ1aswnwsLRyzTHqJ+aKCxsyUqrP0SzDqigsslPKrzDn8kp6/JIZMlMSmjqlCAFKRRuFwTX3dWps6HOT6Bv6o6lh8Kz4n1Kp5MaGNP8xJMdoSsaRj06ZcQACSdAASSegGq6fAeyL4D67xTbysX9uTfn2UaHHDTGWjRZSB1Il1Qj+N11ZgKjqhc6o5zjsS42HQbKJTpGkY2GnH06bTRwzcoHxP/ET/ABaz19Fl4LCmpUIcbAyT0nTuVb7sBzi3R219tzPOVpcPphgjmST3Kzi+zs0a6o08bixTZSs345EgQMjDET3C7/AVfe02vzGXAEwQIOpEDT6xC8p4xQFWpSb4vDLnZRMAEAGNjJFzzXo/AcK8Umljmsa4l0AZibtEmYgw1wI7Kk65KX0ROP8Ayt+Ga/uhEXPck/eqy/aPhja2GqsDRmyFzDvnZ42iepEeaMbhHgz70mYnwt0AiByk39VcGQIJLup/tZbvKOVOmeO46tnoMOa7WgERcgGAR0gG/RYT3LT/AGsNY6kb+IwbW1kLKe1Rw4TRrz5aZH3iSryJLUwBHUyHZefP9VpNq5arXOGj2Ot0cD6WU8fRDml41bdCvcCW9zvYDWL66FKSKiz219IE2mNRc6G4VDsAy8MbJmCRmgkkzB6mVn+y2PbicO3xOzMGRwDiLAQ026AenVbJwzep7ucdZ5nqltC0zzXjuBdTqljjnzn4gAdQTe4grJe4t/eb+MW8X7w6xE+S7T2s4cxhYWMa17y7oCQ2Z9JXHVacMYA4Etc4/FMtMjX+UDzWMZdX1Z1OPaPdGdVw7HtLmGSIt/ZBZUXWES9vhvHSfp5KkvL7EifRamQKQlCuqUCD/RRIhVYishKFKE4SERhOApBOhsaQwCllkpNCm5TZSRJjFdl5qNJ9lL3kqHZoibVqcOYIzE35dO3qsqi0uMBbNFhPhaC7sJPmocW8FJ0XsO5+wrXMe8ZGGHH6C5Q1RpY7K/wnedB3Wphab6TveiHMy+ImxiZL2gbCNNUpNRWCoJzlQH7PMrsruaWl/icy4zZibAD5eq9goOcGMGQtAAsXNkaTZs319Fg+xuBytL3AToCJ1vmd5km/QrpHvA+/0VcKu5vyR6mSxBeCvM/k0c7k8tLd0Pj65ZSe9xHgY91hYw0wLnnCZ2OMwKbz1yjmRuehPpzC5H2/4y5tMUIyueczhNwxp8Mnq6T2F1tKVI5oxuVHA4Sg4PGZpIu4kQR4DNvOAqHiSTzKOw1INvN3MEgyDLr2HkR9wgyp4y+XwivKkrElqZUX4ogUnH8wA+/ksbB1Ghrg6JEhpIHLbqlicU55g6DQIQmQehHrb+6csiTo6j2Z4s7DVA9pBY6zxNo59p/TkvU6b3Vmh9Oo0MMfhkjUkO6/D5SdwvEsLD2AfiaSR1EiR33W77Ne0b8M4AGWaFp+hHL5hZ6Zo1as9KxXDH1G5X1A6B+QAZojNrbf17RxvtFwL9nYHsDniRq3wNiZLgBAmd/1Xb8J4qzENljmg7tMlwvqNMzY3CNr4bOIdlIIAILA4Hnqd7eiUoKSvyVDklF14PGeKYhzw1uUDNAgQHEddtNEDWwcS2xjnAPkZjloV6lj/Y2m45qbsjpLrMblm34fJcZx32erseJYXMBnMxpM2AM9IGndRHtHDWDV9J5Tyc63h7mtLocD+G4vfWOSCc2b/wDI7rpqdQR4LQQIIjcADtoPkguLUAWtcAGuzBth8WYSJi5IAHqlHkuVMcuGo2mYuQ8kxCvxdB9N2V1jqORB0LeYUQHkSW2/NBj15rbaswdp0VAKQVjWuAPhsNfvzVboSGSCkoNBIkCY1jb7grSwvDi4Bwcw7lsgkDmQJKTRSZUyhYQfkrWuYwxqeff6J6hLXlmUuLTBDPFB5SN1ocKwrKbszmF1QgkB5GVsucG9S63lzUSairLhFylSKWnxFoacwuQGm06TZb/DaDmsZVLMrMrs9zmkkgEm2oI0mIKqrVi1xDGzVc+TIAD/AAwCBJhpuPJ3NbTMJXfkw5pVGMaPjDblpgMJ5ReQdYm2qwnySksI6I8ai7bMtlNtRzmRvBDQcxMAknnFrdVscP8AZ3FlrWEFrNszmiGG2UgXBAvuZ7ldpw7hNOh8Alx1eQMxtGuwgCwRrxP/ADC0XC5RXZ/wwfqFGT6L+kMJhxTY1jZIaIk6nmT1Jupucqv2ZptBOurnGx1mSsbjnH6GHB+F79rAwYIBv0kT6St8QRzZnL9DOOcYZhaZe4y8jwtGs/f3z8hr4uriqj3vLpEOAAmA0zE9p733U+L4qvinue57QwbkkQDciNSd1VQcKQLWZjnhrr3IBBkW8Im0dTqs23I2jFR2SrvgAH4gyNdLiyCRWJMAjcn6ag+ZQivjWCOV/IeUlFJaGRiVnqlhsRz/AEutDFcOeLg5h01Hlug2CD1H3omyUTZoJ5mbjePRGYfFZrP5fF+K3M77IBvwkdfJSpPg3Goj+ilqy4ujoMNi304c1x5jUEHpHwnqu14P7aOADawzj8wgP8zo75FebOqEDm22vXlF+fop4euC7KLcpOvnss6kso1+MsM9ywHFqVazHtn8pOV//YdfJGvZPLzHr8pXhVPFlkX7A7xBgHZb2B9sqtOPG/Lyf429gTceRVKX2iHCtM7ziHsxTrEOeYcJMsEXPclYHFP8PsxzUqkGNHk68wb/ADVuD9vWu+NjT1puI/8AF39Vr4b2xwrozPcw/vMJHq2VPWPgrvNbOf4l7I4lxD2uY8hjWkEa5WkQHHabxZZA9ncTTLS2jUc5ocB4Tlki0gAiATYjkvSqfFaTwclakXQYl412ltjCtYyoT/qgjoxptbf/ALvlyMp8aqkUud7Z5Q7h9cP8WHfndGZxpu1AAIuIFgDvqoYf2ae9w/6VRom0scWut8Wlp5Ty7L1unhagP+ob6nIJJ85gDZFMZAi5++iS434ZT9QvKPLOHcOxPuyz3RJcTE2IJABEG7oF9k+D9la4YWCm9kkZi73ZY6DvJBgzYknZeqBvRRFMD8I9B2R7P6D9R+HBcK9jHMfne+mGg2aCXAFoI2AmB12v108N7I0Q8ve97834QCGQXGLCTYnn16rqH12M+J7W93NH1VLuK0dPeNP8Mu/2gp+2rtk+/JqkLAYOjSvTpZSd8kOvzc66MZVJ/CQOpbb0KyK3tHRaYvPXKz0BM/JZOL9tWNs0R1Ij1L4/2qrjHBFTlk6wvfBOVo0uXW6yYsgMdxhlIAve0m9hNxtl3J0mAVwGO9rnPPhLn9joe5EAdm+ZXL8Sxr6jnS4SIkSSb3EkmTrty0U+43hIr2klcmdvxz20LgW04aBr0An4jo3Tck9lydGkari57gZk6zmE9dp80DS8DHkQ4w4TfXQ27SkHuMFstgQ2LxYW87qXFvNlppYSwFVMSMr2gNDW7i17+L0tKHlzcvi0aO8XMm2klDsFncnNgdI3KVAQ5wkmZ32sGhUokSlewmtZxvPWZ25qopEpiVqlSMm7djpKMp0xEm1k9Wkx48QvzGv90C56nTqqyQTGYFzL6t5j9RsgpXTU35rLH4jg8hzD4T8jy7JNBZSahOXcDppP9E9KmDM6D1NlQ0wrGuym3L7+qkrYRj/gYfl+qgKxAEHnaPonxTpaJ2IVA5jVStFPDCKWIGZst767DotJ+JIvYTu0g9dv1WLIAabzfzTh8TB1EffVJxTKjNo3Bi3RqD/EP1VtPHPbBt5Ej6QsBrzoST56bqQqEOHiNjz9ZU9P0fdPaOnbx17YBquaSNM7/rmRLOP1DYVnzH53x/uXIuMvnZp57ax6ko2lWY2AQbEOBtdp5j70Q4vwwUo+UdGeMVd6rv8Avef/AHCCd7Rvd+MuHVrp+bysF5cx99Ow0MwoYSvY5otz9EurrZTlG9UbT+PPOjT5ZP0ZPzUHccqdB/E95PoXR8lmh7mtfyduDpF4ttANlHh9R7SMhg63E6ffzT64F3VmwOJVLBziwuJ0hotoDaRv80NTa174+LeZJPr/AFVdTE53kOMybegdJmxv9FLDOa0k7menQ38kuqWinJt/hfUfHw2Ei4idQSLX23QmHaHVHPLrNNuZhXskN8RFpOoJHTogcPAGYayT1AvFvvROKomTsNqvOR7WkuEG8CL6wqrmwdeDHnoY7kKD3ZR4dCNOhnkoUcx1Glgf3bbc7BNL6J7LyF1RBEWBAlsDQjQ8jN/JRaANEiUpVpURJ2IlRe6EiUM9+YxsNQhuhbwS/aAkmzJKexXQHqhzTDgQVEPW45si9+6BqYZh0EfT0WtGZRSrHzC1Ww9l9xcLHezKtPhzHNguHhIzCCJtzG09UFRi5OkZGNwTqbg12pAcOx0nkd46oYu5rruKZK+YjUEDtrAaI2i657E4JzLuAiY1HKbjUIaLnBxbXgpqnw+nyKpL1YaIUTQUJEN2QcdlOBFlF1MpnE8kwTLmuvOidryJgSLj75IfMph8GyVBZIPmRa1+/miDUNmiIj63v66oemLddf8AnuE+aAduQ+R/VDGg9lSRD4IFh0jkUEymS4t3JcPQz99kVSeBl/KYJ6EfognWJi8F0dRpPdTHyXKqROTl1323Gn33RdEjQDroBp2VTWwLjryKYNjn1B25R1T2JKiWFcCXSNzHS0R6BF4Z2Wzu3ffRBUnnMTBEjluiQCQLZbzt+iTQKSLyQJAkCNJsTzhCtpkybCYvuByCuDUk0qE5WKP6KQKjKaVRNk8yaVAlRLkCJFyExNMG+6te9bvsrwb3rhWePA0+EH8bhv8Awj5nzSk+qtjirdHOfslX8tT0ckvXswSWHu/hp0R5t7xD1Zm4IHODYK6m1XiV1mINiabJDWEuDiBmzNLb8xAg+ak9wgv5aRYhohomNbTz1VWNJhjYBDSYsTvJkDVD+/LbH8Qm8m5m3X+6TOqEorQRRxHhBGo3Fj8JP1y7f3txUQBEjvud55oEVIgCW6acjOmiuplzibEaySACQdrIQTknGmyiozL2On9FGFp4mkPdnpBCzGlJo5hZUsimFIIApNIHZQOGCKSSAENA80xoO5hGJ0ADMY4GxAG4UnYckm8TsFeE6AtlZoz8RJ0+XZTZTA0ClKUoAcBSlVylKAJkpiVGUxKAJEpiVAuUS5AEy5VucmLlPCYZ1V4YzU6nYDclDwCDOCcMdiHxoxt3H/1HUrtuIY5mGpiABAysaOg+gVeHZTw1KBZrRJO5O56k/wBFx3FOIOqvLzpo0flHLusczf4af5QX/n1f8/8A4tSWJmSV9ETZosRLEklsZglf4/I/VDYjVn8QSSQUtg7f9Q9//ZaVNJJCKmW4r/Sd5fULHCSSTIRY1SSSUjHSSSQA4SSSQA4TpJIAZJJJACSSSQAioFJJADKJSSQBAre9jfiqdm/VJJTPQ47NX2o/0h/GPoVx7kklPHoqZFJJJaEH/9k="
}

let cake2 = {
  name:"Fruit Cake",
  price:800,
  image:"https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluayUyMGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
}
function App() {
  return (
    <div>
     {/* <Navbar ></Navbar>
    
     <Signup />
     <Carousel />
     <div className="row">
     <Cake data={cake} />
     <Cake data={cake2} />
     </div>
     <Login /> */}
     <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="**" component={Pagenotfound} />
      </Switch>

     </BrowserRouter>

    </div>



  );
}

export default App;
