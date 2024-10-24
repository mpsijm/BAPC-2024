---
title: System
thumbnail: /assets/thumbnails/rick_roll.jpg
---

This page describes current plans for the Programming Environment which will be available to each BAPC 2024 team.

Each team will be provided with one laptop, shared between team members. Each laptop will have an external mouse. The configuration of each laptop will be as follows:

## Hardware

The laptop will be a HP 450 G9 and will have the following hardware specifications:

- Intel Core i5 1235U Processor
  - 2P8E cores, hyperthreading disabled
  - turboboost disabled
  - Judging on P cores
- 8GB of RAM

## Software

The software configuration will consist of the following:

- OS:
  - Ubuntu 22.04 LTS Linux (64-bit)
- Desktop:
  - GNOME
- Editors:
  - vim
  - gvim
  - nano
  - neovim
  - emacs
  - gedit
  - geany
  - kate
- IDEs:

  - IntelliJ IDEA Community

    - Version: 2023.3.2
    - Workspace is already set up but needs to be opened from the welcome screen
    - Plugins:
      - IdeaVim

  - CLion

    - Version: 2023.3.2
    - Workspace is already set up
    - Plugins:
      - IdeaVim

  - PyCharm Community

    - Version: 2023.3.2
    - Workspace is already set up
    - Plugins:
      - IdeaVim

  - Visual Studio Code

    - Plugins:
      - C/C++ - Microsoft
      - C# - Microsoft
      - Code Runner - Jun Han
      - Debugger for Java - Microsoft
      - ESLint - Dirk Baeumer
      - Language Support for Java - Red Hat
      - Python - Microsoft
      - TSLint - Microsoft

  - Code::Blocks

## Languages

The following languages are allowed during the contest:

- C
  - Standard: gnu17
- C++
  - Standard: gnu++20
- Python
  - Version: Python 3.10
- Java
  - Version: 17
- Kotlin
  - Version: 1.9

Note that Python 2 is no longer supported.

## Compilation of Submissions

During the contest, teams will submit proposed solutions to the contest problems to the Judges using the [DOMjudge](https://www.domjudge.org/) contest control system. This can be done through the [web interface](https://www.domjudge.org/docs/manual/8.1/team.html#web-interface), or using the [submit client](https://www.domjudge.org/docs/manual/8.1/team.html#command-line-submit). Source files submitted to the Judges will be compiled using the following command line arguments for the respective language:

- C:

  - gcc -std=gnu17 -x c -Wall -O2 -static -pipe -o $1 "$1.c" -lm
  - Available as mygcc

- C++:

  - g++ -std=gnu++20 -x c++ -Wall -O2 -static -pipe -o $1 "$1.cpp" -lm
  - Available as mygpp

- Python 3:

  - pypy3 $@
  - Available as mypython

- Java:

  - javac -encoding UTF-8 -sourcepath . -d . $@
  - Available as myjavac

- Kotlin:
  - kotlinc -d . $@
  - Available as mykotlinc

## Execution of Submissions

For each language, if the above compilation step is successful then the submission will be executed as follows:

- For C/C++: the executable file generated by the compiler will be executed to generate the output of the submission.
- For Python 3: the main source file will be executed by the PyPy3 Python3 interpreter to generate the output of the submission.
- For Java: the compiled main class will be executed using the following command:
  - java -Dfile.encoding=UTF-8 -XX:+UseSerialGC -Xss65536k -Xms1966080k -Xmx1966080k $@
  - Available as myjava
- For Kotlin: the compiled main class will be executed using the following command:
  - kotlin -Dfile.encoding=UTF-8 -J-XX:+UseSerialGC -J-Xss65536k -J-Xms1966080k -J-Xmx1966080k $@
  - Available as mykotlin

Compilation and execution as described above will take place in a "sandbox" on a dedicated judging machine. The judging machine will be identical to the machines used by teams (see Hardware above).

The sandbox will allocate 2 GiB of memory; the entire program, including its runtime environment, must execute within this memory limit. For interpreted languages (Python, Java, and Kotlin) the runtime environment includes the interpreter (that is, the PyPy3 interpreter for Python and the JVM for Java/Kotlin). The sandbox memory allocation size will be the same for all languages and all contest problems. For Java and Kotlin, the above commands show the stack size and heap size settings that will be used when the program is run in the sandbox.

## Documentation / Specification / Reference materials

The following reference materials will be available on the teams' workstations through the browser:

- [C reference from cppreference.com](https://en.cppreference.com/w/c)
- [C++ reference from cppreference.com](https://en.cppreference.com/w/cpp)
- [Python 3.10 documentation](https://docs.python.org/3.10/download.html)
- [Java® Platform, Standard Edition & Java Development Kit Version 17 API Specification](https://docs.oracle.com/en/java/javase/17/docs/api/)
- [Kotlin Language Documentation 1.9.20 (As PDF)](https://web.archive.org/web/20240112120830/https://kotlinlang.org/docs/kotlin-reference.pdf)
- [DOMjudge Team Manual (As PDF)](https://www.domjudge.org/docs/manual/main/index.html)