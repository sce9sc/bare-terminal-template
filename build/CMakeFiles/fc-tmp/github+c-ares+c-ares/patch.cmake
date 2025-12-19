cmake_minimum_required(VERSION ${CMAKE_VERSION}) # this file comes with cmake

message(VERBOSE "Executing patch step for github+c-ares+c-ares")

block(SCOPE_FOR VARIABLES)

execute_process(
  WORKING_DIRECTORY "/Users/sce9sc/Documents/work/pear-test/template/build/_deps/github+c-ares+c-ares-src"
  COMMAND_ERROR_IS_FATAL LAST
  COMMAND  [====[/Users/sce9sc/Documents/work/pear-test/template/node_modules/cmake-runtime-darwin-universal/bin/cmake]====] [====[-DPATCHES=]====] [====[-P]====] [====[/Users/sce9sc/Documents/work/pear-test/template/node_modules/cmake-fetch/patch.cmake]====] [====[ON]====]
)

endblock()
