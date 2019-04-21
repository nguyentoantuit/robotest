docker run --net=host -v ${PWD}\suites:/usr/kolekto/suites -v ${PWD}\reports:/usr/kolekto/reports  pythonautotest bash
docker run -it  pythonautotest bash
docker run -it --net=host -v ${PWD}\suites:/usr/kolekto/suites -v ${PWD}\reports:/usr/kolekto/reports  pythonautotest:1.0.1