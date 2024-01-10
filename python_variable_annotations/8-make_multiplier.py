#!/usr/bin/env python3
"""Type-annotated Higher Order Function (returns another function)"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Parameters:
        multiplier: factor

    Return:
        multiplication in float
    """

    def inner_function(f: float) -> float:
        """Closure function (captures `multiplier` from outside its scope)"""
        return float(f * multiplier)

    return inner_function
