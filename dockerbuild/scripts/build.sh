#!/usr/bin/env bash
[[ "TRACE" ]] && set -x

: ${BRANCH:=master}

while [[ $# -gt 0 ]]
do
key="$1"
case $key in
 -r|--repository)
 REP="$2"
 shift
 shift
 ;;
 -u|--url)
 URL="$2"
 shift
 shift
 ;;
 -b|--branch)
 BRANCH="$2"
 shift
 shift
 ;;

esac
done

if [[ -z $REP ]]; then
  echo "Please provide repository name."
  exit 1
elif [[ -z $URL ]]; then
  echo "Please provide the url (e.g. https://github.com/sumitmaji)."
  exit 1
fi

NUMBER=$[ ( $RANDOM % 100 )  + 1 ]
mkdir /tmp/$NUMBER
pushd /tmp/$NUMBER
git clone -b $BRANCH $URL/$REP
popd
