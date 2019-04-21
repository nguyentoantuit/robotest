FROM python:3
LABEL Name=robot.framework.python Version=0.0.1
RUN python3 -m pip install robotframework

RUN python3 -m pip install --upgrade robotframework-seleniumlibrary
RUN python3 -m pip install selenium

#CMD ["robot --console verbose --outputdir /usr/kolekto/reports /usr/kolekto/suites"]