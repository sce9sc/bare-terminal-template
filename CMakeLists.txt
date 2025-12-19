cmake_minimum_required(VERSION 3.31)
project(bare_cli_template C)

find_package(cmake-bare-bundle REQUIRED PATHS node_modules/cmake-bare-bundle)
find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)

bare_target(target)

fetch_package("github:holepunchto/bare")

add_bare_bundle(
  cli_bundle
  ENTRY src/bin/oniri.mjs
  OUT src/main.bundle.h
  BUILTINS src/builtins.json
)

add_executable(bare-cli
  src/main.c
  src/main.bundle.h
)

target_link_libraries(
  bare-cli
  PUBLIC
    $<LINK_LIBRARY:WHOLE_ARCHIVE,bare_static>
)

link_bare_modules(bare-cli)

install(TARGETS bare-cli)
