class CreatePedalBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :pedal_boards do |t|
      t.string :name
      t.integer :pedal_order
      t.boolean :stereo

      t.timestamps
    end
  end
end
