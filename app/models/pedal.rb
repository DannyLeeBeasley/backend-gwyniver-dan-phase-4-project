class Pedal < ApplicationRecord
  belongs_to :User
  belongs_to :PedalBoard
end
