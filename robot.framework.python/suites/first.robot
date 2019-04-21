*** Settings ***
Documentation    Example using the space separated plain text format.

*** Variables ***
${MESSAGE}       Hello, world!

*** Test Cases ***
My Test
    [Documentation]    Example test
    Log    ${MESSAGE}

Another Test
    Should Be Equal    ${MESSAGE}    Hello, world!